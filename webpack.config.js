const MODE = process.env.NODE_ENV || "development";

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

  devtool: false,
};
