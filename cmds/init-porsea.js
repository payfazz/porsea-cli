const fs = require("fs-extra");
const packageJsonTemplate = require("../templates/package.json");
const gitignoreTemplate = require("../templates/gitignore");

const initPorsea = argv => {
  const { projectName } = argv;
  const { cwd } = process;
  const projectPath = `${cwd()}/${projectName}`;

  if (fs.pathExistsSync(projectPath)) {
    console.log("Folder already exists!");
    return;
  }

  fs.mkdirSync(projectPath);
  console.log("Creating a New Project Folder: " + projectName + " in " + cwd());

  fs.writeFileSync(
    `${projectPath}/package.json`,
    JSON.stringify(
      packageJsonTemplate({ name: projectName, description: projectName })
    )
  );
  console.log("Creating package.json");

  fs.writeFileSync(`${projectPath}/.gitignore`, gitignoreTemplate());
  console.log("Creating .gitignore");
};

module.exports = initPorsea;
