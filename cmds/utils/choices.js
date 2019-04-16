const fs = require("fs-extra");
const path = require("path");

const componentTypes = {
  type: "list",
  name: "componentType",
  message: "Type of Component: ",
  choices: ["Class Component", "Functional Component"]
};

const componentDestinations = {
  type: "list",
  name: "componentDestination",
  message: "Create component in folder: ",
  choices: ["src/pages", "src/components"]
};

const componentPageDestinations = {
  type: "list",
  name: "componentPageDestination",
  message: "Create component in page: ",
  choices: (() => {
    try {
      return fs
        .readdirSync(path.resolve(process.cwd(), "src/pages"))
        .filter(folder =>
          fs
            .lstatSync(path.resolve(process.cwd(), "src/pages", folder))
            .isDirectory()
        );
    } catch (e) {
      return [];
    }
  })()
};

module.exports = {
  componentTypes,
  componentDestinations,
  componentPageDestinations
};
