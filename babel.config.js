module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
      "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            helpers: "helpers",
            hook: "hook",
            assets: "assets",
            navigation: "navigation",
          },
        },
      ]
    ],
  };
};
