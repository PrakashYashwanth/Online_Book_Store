const path = require("path");

const MODE = process.env.NODE_ENV || "development";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: MODE,

  output: {
    path: path.resolve(__dirname, "dist"),
    // To organize images into a single folder
    assetModuleFilename: "images/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        // to handel all types of images
        test: /\.(png|jpe?g|gif|svg)$/i,
        // type: "asset/inline", => this will add the images inline instead of outputting it seperately in dist folder
        // type: "asset/resource", => adds the image to images folder
        type: "asset", // Determined by the webpack as inline or not based on size. Max size for inline is 8kb
        // to define our specified size instead of default 8kb
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024, => 30 bytes
        //   },
        // },
      },
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
        test: /\.(s[ac]|c)ss$/i,
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
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devtool: "source-map",
};
