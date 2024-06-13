const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@global': 'src/global',
    '@routing': 'src/routing',
    '@pages': 'src/pages',
    '@redux': 'src/redux',
    '@api': 'src/api',
    '@features': 'src/features',
    // Add more aliases as needed
  })(config);

  return config;
};
