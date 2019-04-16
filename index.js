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
const {
  initPorsea,
  createPage,
  createComponent,
  promptComponentType,
  promptDestination,
  promptPageDestination
} = require("./cmds");
const {
  componentDestinations: {
    choices: [page]
  }
} = require("./cmds/utils/choices");
// const { isValidPorseaProject } = require("../cmds/utils/helpers");

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
      const type = await promptComponentType();
      const destination = await promptDestination();
      if (destination == page) {
        const pageDestination = await promptPageDestination();
        createComponent({
          name: argv.componentName,
          type,
          destination: `${destination}/${pageDestination}/components`,
          isInPage: true
        });

        return;
      }

      createComponent({
        name: argv.componentName,
        type,
        destination,
        isInPage: false
      });
    })();
  })
  .demandCommand(1, "")
  .strict().argv;
