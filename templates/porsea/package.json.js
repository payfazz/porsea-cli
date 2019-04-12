module.exports = ({ name, description }) => ({
  name,
  version: "1.0.0",
  description,
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
