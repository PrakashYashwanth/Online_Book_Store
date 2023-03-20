const MODE = process.env.NODE_ENV || "development";

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: MODE,

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  devtool: "source-map",
};
