const MODE = process.env.NODE_ENV || "development";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: MODE,

  module: {
    rules: [
      {
        //"jsx?" here means it may or may not have x
        test: /\.jsx?$/,
        // excluding node modules js files as they are not required and time consuming
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        // supports scss, sass, css
        test: /\.(s[ac]|c)ss$/,
        use: [
          // order of adding items is important. Loaders are evaluated/executed from right to left (or from bottom to top)
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devtool: "source-map",
};
