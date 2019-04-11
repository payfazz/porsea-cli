const path = require("path");

const porseaConfig = webpackConf => {
  return {
    customWebpack: {
      ...webpackConf,
      resolve: {
        alias: {
          Pages: path.resolve(__dirname, "src/pages"),
          Components: path.resolve(__dirname, "src/components"),
          Assets: path.resolve(__dirname, "src/assets")
        }
      }
      //Custom Webpack Config Here
    }
  };
};

module.exports = porseaConfig;
