const config = (api) => {
  api.cache(true);

  return {
    presets: [
      ['@babel/preset-env', {
        targets: {
          node: 12,
        },
      }],
      '@babel/preset-typescript',
    ],
  };
};

module.exports = config;