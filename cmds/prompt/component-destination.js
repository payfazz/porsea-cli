const inquirer = require("inquirer");
const { componentDestinations } = require("../utils/choices");

const promptDestination = async () => {
  const { componentDestination } = await inquirer.prompt(componentDestinations);
  return componentDestination;
};

module.exports = promptDestination;
