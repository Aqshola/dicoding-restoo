const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = merge(common, {
  mode: "development",
  plugins: [new BundleAnalyzerPlugin()],
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, "dist"),
  },
});
