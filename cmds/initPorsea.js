const fs = require("fs-extra");
const path = require("path");
const packageJsonTemplate = require("../templates/package.json.js");
const gitignoreTemplate = require("../templates/gitignore");

const initPorsea = argv => {
  const { projectName } = argv;
  const { cwd } = process;
  const projectTargetPath = `${cwd()}/${projectName}`;
  const pagesTargetPath = `${projectTargetPath}/src`;

  if (fs.pathExistsSync(projectTargetPath)) {
    console.log("Folder already exists!");
    return;
  }

  fs.mkdirSync(projectTargetPath);
  console.log(
    "Created a New Project Folder: " +
      "'" +
      projectName +
      "'" +
      " in '" +
      cwd() +
      "'"
  );

  fs.writeFileSync(
    `${projectTargetPath}/package.json`,
    JSON.stringify(
      packageJsonTemplate({ name: projectName, description: projectName })
    )
  );
  console.log("Created 'package.json'");

  fs.writeFileSync(`${projectTargetPath}/.gitignore`, gitignoreTemplate());
  console.log("Created '.gitignore'");

  fs.copyFileSync(
    path.join(__dirname, "../templates/porsea.config.js"),
    projectTargetPath + "/porsea.config.js"
  );

  fs.copySync(path.join(__dirname, "../templates/src"), pagesTargetPath);
  console.log("Created Folder 'src'");
};

module.exports = initPorsea;
