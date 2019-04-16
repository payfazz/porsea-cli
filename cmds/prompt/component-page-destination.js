const inquirer = require("inquirer");
const { componentPageDestinations } = require("../utils/choices");

const promptPageDestination = async () => {
  const { componentPageDestination } = await inquirer.prompt(
    componentPageDestinations
  );
  return componentPageDestination;
};

module.exports = promptPageDestination;
