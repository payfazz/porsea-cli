const fs = require("fs-extra");
const path = require("path");
const {
  capitalizeFirstLetter,
  isValidPorseaProject
} = require("../cmds/utils/helpers");

const createPage = argv => {
  const { pageName } = argv;
  const pagesTargetPath = path.resolve(process.cwd(), "src/pages", pageName);

  fs.mkdirSync(pagesTargetPath);
  console.log(`Created a New Page: '${pageName}'`);

  const baseTemplatePagePath = path.join(
    __dirname,
    "../templates/common/page.txt"
  );

  const templatePage = fs.readFileSync(baseTemplatePagePath);
  const templatePageWithPageName = templatePage
    .toString()
    .replace(/{{ PageName }}/g, capitalizeFirstLetter(pageName))
    .replace(/{{ PagePath }}/g, pageName);

  const writeFilePath = path.resolve(pagesTargetPath, "./index.js");
  fs.writeFileSync(writeFilePath, templatePageWithPageName);
  return;
};

module.exports = isValidPorseaProject(createPage);
