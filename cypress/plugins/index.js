const browserify = require('@cypress/browserify-preprocessor');
const typescript = require.resolve('typescript');
const fs = require('fs');
const path = require('path');

module.exports = (on, config) => {
  const options = browserify.defaultOptions;
  options.typescript = typescript;
  
  on('file:preprocessor', browserify(options));

  on('task', {
    readFile (filePath, options) {
      const fullPath = path.join(__dirname, '..', filePath);
      const fileContents = fs.readFileSync(fullPath, options.encoding);
      return fileContents;
    }
  });
};
