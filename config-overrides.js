const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@global': 'src/global',
    '@navigation': 'src/navigation',
    '@pages': 'src/pages',
    '@redux': 'src/redux',
    // Add more aliases as needed
  })(config);

  return config;
};
