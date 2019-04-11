const fs = require("fs-extra");
const path = require("path");
const packageJsonTemplate = require("../templates/porsea/package.json");
const gitignoreTemplate = require("../templates/porsea/gitignore");

const initPorsea = argv => {
  const { projectName } = argv;
  const projectTargetPath = `${process.cwd()}/${projectName}`;
  const pagesTargetPath = `${projectTargetPath}/src`;

  if (fs.pathExistsSync(projectTargetPath)) {
    console.log("Folder already exists!");
    return;
  }

  fs.mkdirSync(projectTargetPath);

  const basePackageJSONPath = `${projectTargetPath}/package.json`;
  fs.writeFileSync(
    basePackageJSONPath,
    JSON.stringify(
      packageJsonTemplate({ name: projectName, description: projectName })
    )
  );

  const baseGitIgnorePath = `${projectTargetPath}/.gitignore`;
  fs.writeFileSync(baseGitIgnorePath, gitignoreTemplate());

  const basePorseaConfigPath = path.join(
    __dirname,
    "../templates/porsea/porsea.config.js"
  );
  fs.copyFileSync(
    basePorseaConfigPath,
    `${projectTargetPath}/porsea.config.js`
  );

  const baseFolderPath = path.join(__dirname, "../templates/porsea/src");
  fs.copySync(baseFolderPath, pagesTargetPath);
  console.log(
    `Created a New Project Folder: ${projectName} in ${process.cwd()}`
  );
};

module.exports = initPorsea;
