const fs = require("fs-extra");
const path = require("path");
const { capitalizeFirstLetter } = require("../cmds/utils/helpers");

const createPage = argv => {
  if (
    fs.existsSync(path.resolve(process.cwd(), "porsea.config.js")) &&
    fs.readJSONSync(path.resolve(process.cwd(), "package.json")).dependencies
      .porsea
  ) {
    const { pageName } = argv;
    const pagesTargetPath = `${process.cwd()}/src/pages/${pageName}`;

    fs.mkdirSync(pagesTargetPath);
    console.log("Created a New Page: " + "'" + pageName + "'");

    const baseTemplatePagePath = path.join(
      __dirname,
      "../templates/common/page.txt"
    );

    fs.readFile(baseTemplatePagePath, (_, data) => {
      let replacePageName = data
        .toString()
        .replace(/{{ PageName }}/g, capitalizeFirstLetter(pageName))
        .replace(/{{ PagePath }}/g, pageName);
      fs.writeFileSync(pagesTargetPath + "/index.js", replacePageName);
    });
  } else {
    console.log("This is NOT a Porsea Project!");
  }
};

module.exports = createPage;
