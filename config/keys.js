// keys.js - decide which credentials to use
if (process.env.NODE_ENV === 'production') {
  // return pro set of keys
  module.exports = require('./prod');
} else {
  // return dev keys
  module.exports = require('./dev');
}
