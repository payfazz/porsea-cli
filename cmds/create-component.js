const fs = require("fs-extra");
const path = require("path");
const {
  capitalizeFirstLetter,
  isValidPorseaProject
} = require("./utils/helpers");
const {
  componentTypes: {
    choices: [classComponent, functionalComponent]
  }
} = require("./utils/choices");

const getBasePathByComponentType = type => {
  switch (type) {
    case classComponent:
      return path.join(__dirname, "../templates/common/class-comp.txt");
    case functionalComponent:
      return path.join(__dirname, "../templates/common/func-comp.txt");
    default:
      break;
  }
};

const createComponent = ({ name, type, destination, isInPage }) => {
  const basePath = getBasePathByComponentType(type);
  const baseTemplate = fs.readFileSync(basePath);
  const replaceComponentName = baseTemplate
    .toString()
    .replace(/{{ ComponentName }}/g, capitalizeFirstLetter(name));
  if (isInPage) {
    const componentFolderInPage = path.resolve(process.cwd(), destination);
    if (!fs.pathExistsSync(componentFolderInPage)) {
      fs.mkdirSync(componentFolderInPage);
    }

    fs.writeFileSync(
      path.resolve(destination, `${name}.js`),
      replaceComponentName
    );
    return;
  }
  const componentFolderInComponent = path.resolve(
    process.cwd(),
    destination,
    name
  );
  fs.mkdirSync(componentFolderInComponent);
  fs.writeFileSync(
    `${componentFolderInComponent}/index.js`,
    replaceComponentName
  );
};

module.exports = isValidPorseaProject(createComponent);
