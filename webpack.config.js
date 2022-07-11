const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/router.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "CHAT.bundle.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./static/index.html",
      favicon: "./static/favicon.ico",
    }),
    new CopyPlugin({
      patterns: [{ from: "./static/global-style.css", to: path.resolve(__dirname, "dist") }],
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: [".ts", ".js", ".json"],
    alias: {
      handlebars: "handlebars/dist/handlebars.min.js",
    },
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
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
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    hot: true,
    compress: true,
    port: process.env.PORT || 3030,
  },
};
