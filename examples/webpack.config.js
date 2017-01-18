module.exports = {
  entry: './examples/script.js',

  output: {
    path: './examples',
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'buble',
      query: {
        objectAssign: 'Object.assign',
        
        transforms: {
          modules: false,
        }
      }
    }]
  }
};