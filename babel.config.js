//To enable babel
module.exports = {
  presets: [
    "@babel/preset-env",
    // with this(runtime: "automatic"), we can just import React when necessary, like if we are using some hooks from react lib
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
