const fs = require("fs");

const targetPath = process.cwd() + "" + "/templates/src/pages/";
const folderNameInTargetPath = fs.readdirSync(targetPath);

const RouteComponent = folderNameInTargetPath.map(folderName => {
  const TargetComponent = require(targetPath + "" + folderName);
  return TargetComponent.navigationOptions();
  // <Route component={TargetComponent} {...TargetComponent.navigationOptions} />;
});

console.log(RouteComponent);
