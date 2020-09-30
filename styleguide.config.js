const webpack = require("webpack");

module.exports = {
  require: ["@babel/polyfill"],
  components: "components/**/[A-Z]*.{js,jsx,ts,tsx}",
  ignore: [
    "**/__tests__/**",
    "**/*.test.{js,jsx,ts,tsx}",
    "**/*.spec.{js,jsx,ts,tsx}",
    "**/*.stories.{js,jsx,ts,tsx}",
    "**/*.story.{js,jsx,ts,tsx}",
    "**/*.d.ts",
  ],
  propsParser: require("react-docgen-typescript").withCustomConfig(
    "./tsconfig.json",
    []
  ).parse,
  webpackConfig: {
    resolve: {
      // auto resolves any react-native import as react-native-web
      alias: { "react-native": "react-native-web" },
      extensions: [".web.js", ".js", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.tsx$/,
          loader: "babel-loader",
          exclude: [/node_modules/],
          options: {
            plugins: [
              "@babel/proposal-class-properties",
              "@babel/proposal-object-rest-spread",
              "react-native-web",
            ],
            presets: [
              "@babel/preset-env",
              "module:metro-react-native-babel-preset",
            ],
            babelrc: false,
          },
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                hash: "sha512",
                digest: "hex",
                name: "[hash].[ext]",
              },
            },
          ],
        },
        {
          test: /\.ttf$/,
          loader: "file-loader",
        },
      ],
    },
    // Most react native projects will need some extra plugin configuration.
    plugins: [
      // Add __DEV__ flag to browser example.
      new webpack.DefinePlugin({
        __DEV__: process.env,
      }),
    ],
  },
};
