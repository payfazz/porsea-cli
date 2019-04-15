const path = require("path");
const fs = require("fs-extra");

const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

const isValidPorseaProject = successCallback => argv => {
  const isPorseaConfigExists = fs.existsSync(
    path.resolve(process.cwd(), "porsea.config.js")
  );
  const isPorseaDependencyExists = fs.readJSONSync(
    path.resolve(process.cwd(), "package.json")
  ).dependencies.porsea;

  if (isPorseaConfigExists && isPorseaDependencyExists) {
    successCallback(argv);
    return;
  }

  console.log("This is NOT a Porsea Project!");
  return;
};

module.exports = {
  capitalizeFirstLetter,
  isValidPorseaProject
};
