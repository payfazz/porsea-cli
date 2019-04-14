#!/usr/bin/env node
// demand cmd ???
// webpack config in project
// porsea in node modules
// NODE_ENV
//

const yargs = require("yargs");
const fs = require("fs-extra");
const path = require("path");
const inquirer = require("inquirer");
const { initPorsea, createPage, createComponent } = require("./cmds");

var componentType = {
  type: "list",
  name: "componentType",
  message: "Type of Component: ",
  choices: ["Class Component", "Functional Component"]
};

var componentDest = {
  type: "list",
  name: "componentDest",
  message: "Create component in folder: ",
  choices: ["src/pages", "src/components"]
};

var componentPageDest = {
  type: "list",
  name: "componentPageDest",
  message: "Create component in page: ",
  choices: fs
    .readdirSync(path.resolve(process.cwd(), "src/pages"))
    .filter(folder =>
      fs
        .lstatSync(path.resolve(process.cwd(), "src/pages", folder))
        .isDirectory()
    )
};

const argv = yargs
  .command(
    "init <projectName>",
    "Create Porsea React Project",
    yargs => {
      yargs.positional("projectName", {
        describe: "The name of your project."
      });
    },
    initPorsea
  )
  .command(
    "page <pageName>",
    "Create a new page",
    yargs => {
      yargs.positional("pageName", {
        describe: "The name of new page."
      });
    },
    createPage
  )
  .command("component <componentName>", "Create a new component", yargs => {
    yargs.positional("componentName", {
      describe: "The name of new component."
    });
    (async () => {
      let componentTypeAnswer = await inquirer.prompt(componentType);

      switch (componentTypeAnswer.componentType) {
        case componentType.choices[0]:
          var basePage = path.join(
            __dirname,
            "/templates/common/class-comp.txt"
          );
          break;

        case componentType.choices[1]:
          var basePage = path.join(
            __dirname,
            "/templates/common/func-comp.txt"
          );
          break;

        default:
          break;
      }

      let componentDestAnswer = await inquirer.prompt(componentDest);

      switch (componentDestAnswer.componentDest) {
        case componentDest.choices[0]:
          let componentPageDestAnswer = await inquirer.prompt(
            componentPageDest
          );

          const componentTargetPage = `${process.cwd()}/${
            componentDest.choices[0]
          }/${componentPageDestAnswer.componentPageDest}/components/${
            argv.componentName
          }
        `;
          createComponent(argv, componentTargetPage, basePage);
          break;

        case componentDest.choices[1]:
          const componentTargetComponent = `${process.cwd()}/${
            componentDest.choices[1]
          }/${argv.componentName}
        `;
          createComponent(argv, componentTargetComponent, basePage);
          break;

        default:
          break;
      }
    })();
  })
  .demandCommand(1, "")
  .strict().argv;
