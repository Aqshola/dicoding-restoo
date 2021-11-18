/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");
// const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");

const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const ImageminMozjpeg = require("imagemin-mozjpeg");

const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/scripts/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/templates/index.html"),
      filename: "index.html",
    }),
    // new ServiceWorkerWebpackPlugin({
    //   entry: path.resolve(__dirname, "src/scripts/sw.js"),
    // }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/public"),
          to: path.resolve(__dirname, "dist"),
          globOptions: {
            ignore: ["**/images/**"], // CopyWebpackPlugin mengabaikan berkas yang berada di dalam folder images
          },
        },
        {
          from: path.resolve(__dirname, "src/scripts/sw.js"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
    new InjectManifest({
      swSrc: path.resolve(__dirname, "src/scripts/sw.js"),
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
  ],
};
