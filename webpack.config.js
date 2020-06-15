const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/component/index.tsx",
  target: "web",
  mode: "development",
  output: {
    path: path.resolve("/home/yug/typeScript", "build"),
    filename: "bundle.js",
    chunkFilename: 'bundle.js',
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.css$/,
        loader: "css-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("/home/yug/typeScript", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "./src/style.css",
    }),
  ],
};
