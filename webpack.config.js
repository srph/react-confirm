module.exports = {
  entry: './src/index.js',

  output: {
    path: __dirname + '/dist',
    filename: process.env.NODE_ENV === 'production'
      ? 'react-accordion.min.js'
      : 'react-accordion.js'
  },

  module: {
    rules: [
      {
        test: /prop-types/,
        use: 'null-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-1'],
            plugins: [
              require('babel-plugin-transform-react-remove-prop-types').default,
            ],
          },
        },
      },
    ],
  }
};