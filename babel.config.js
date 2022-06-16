module.exports = function (api) {

  api.cache(true);

  const presets = ['babel-preset-expo'];
  const plugins = ["tailwindcss-react-native/babel"];

  return {presets, plugins};

}