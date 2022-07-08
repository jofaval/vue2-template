const { defineConfig } = require("@vue/cli-service");

const publicPath =
  process.env.NODE_ENV === "production" ? "/vue2-template" : "/";

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath,
});
