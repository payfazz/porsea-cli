const inquirer = require("inquirer");
const { componentTypes } = require("../utils/choices");

const promptComponentType = async () => {
  const { componentType } = await inquirer.prompt(componentTypes);
  return componentType;
};

module.exports = promptComponentType;
