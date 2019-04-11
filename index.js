#!/usr/bin/env node
// demand cmd ???
// webpack config in project
// porsea in node modules
// NODE_ENV
//

const yargs = require("yargs");
const { initPorsea, generatePage } = require("./cmds");

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
    "Generate a new page",
    yargs => {
      yargs.positional("pageName", {
        describe: "The name of new page."
      });
    },
    generatePage
  )
  .command(
    "component <componentName>",
    "Generate a new component",
    yargs => {
      yargs.positional("componentName", {
        describe: "The name of new component."
      });
    }
    // initComponent
  )
  .demandCommand(1, "")
  .strict().argv;
