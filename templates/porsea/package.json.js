module.exports = ({ name, description }) => ({
  name,
  version: "1.0.0",
  description,
  jest: {
    moduleNameMapper: {
      "^.+\\.scss$": "babel-jest",
      "^Apis(.*)$": "<rootDir>/src/apis$1",
      "^Assets(.*)$": "<rootDir>/src/assets$1",
      "^Components(.*)$": "<rootDir>/src/components$1",
      "^Pages(.*)$": "<rootDir>/src/pages$1",
      "^Services(.*)$": "<rootDir>/src/services$1",
      "^Styles(.*)$": "<rootDir>/src/styles$1",
      "^Utils(.*)$": "<rootDir>/src/utils$1"
    }
  },
  scripts: {
    start: "porsea start",
    build: "porsea build"
  },
  keywords: [],
  author: "",
  license: "MIT",
  dependencies: {
    porsea: "file:../../porsea-0.0.1.tgz"
  }
});
