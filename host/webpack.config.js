const fs = require('fs');

module.exports = {
  entry: './lib/index.js',
  output: {
    path: './out/',
    filename: 'bundle.js',
    library: JSON.parse(fs.readFileSync('package.json')).name,
    libraryTarget: 'this',
  },
  externals: [
    /^__prefix__/,
  ],
  devtool: 'source-map',
};
