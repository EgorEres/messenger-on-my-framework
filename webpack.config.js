const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HandlebarsPlugin = require("handlebars-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/router.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "project-name.bundle.js",
  },
  plugins: [new HtmlWebpackPlugin(), new HandlebarsPlugin()],
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig.json"),
            },
          },
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.css?$/,
        loader: "css-loader",
      },
    ],
  },
  devServer: {
    hot: true,
    compress: true,
    port: 4000,
  },
};
