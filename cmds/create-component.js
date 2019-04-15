const fs = require("fs-extra");
const {
  capitalizeFirstLetter,
  isValidPorseaProject
} = require("./utils/helpers");

const createComponent = (argv, componentTargetPath, basePath) => {
  const { componentName } = argv;

  fs.mkdirSync(componentTargetPath);
  console.log(`Created a New Component: '${componentName}'`);

  fs.readFileSync(basePath, (_, data) => {
    let replaceComponentName = data
      .toString()
      .replace(/{{ ComponentName }}/g, capitalizeFirstLetter(componentName));
    fs.writeFileSync(componentTargetPath + "/index.js", replaceComponentName);
  });
};

module.exports = isValidPorseaProject(createComponent);
