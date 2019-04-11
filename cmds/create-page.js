const fs = require("fs-extra");
const path = require("path");
const { capitalizeFirstLetter } = require("../cmds/utils/helpers");

const generatePage = argv => {
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
      .replace(/pageName/g, capitalizeFirstLetter(pageName))
      .replace(/pagePath/g, pageName);
    fs.writeFileSync(pagesTargetPath + "/index.js", replacePageName);
  });
};

module.exports = generatePage;
