module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],

    plugins: [
      ['module-resolver', {
        alias: {
          'App': './App.js',
          '@assets': './assets',
          '@components': './src/components',
          '@context': './src/context',
          '@screens': './src/screens',
          '@styles': './styles',
        }
      }]
    ],
  };

};
