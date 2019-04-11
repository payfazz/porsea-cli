const fs = require("fs-extra");
const path = require("path");

const generatePage = argv => {
  const { pageName } = argv;
  const { cwd } = process;
  const pagesTargetPath = `${cwd()}/src/pages/${pageName}`;

  fs.mkdirSync(pagesTargetPath);
  console.log("Created a New Page: " + "'" + pageName + "'");

  fs.readFile(
    path.join(__dirname, "../templates/pageTemplate/index.txt"),
    (err, data) => {
      let replacePageName = data
        .toString()
        .replace(/pageName/g, capitalizeFirstLetter(pageName))
        .replace(/pagePath/g, pageName);

      fs.writeFileSync(pagesTargetPath + "/index.js", replacePageName);
    }
  );
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = generatePage;
