const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",

  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, "dist"),
  },
});
