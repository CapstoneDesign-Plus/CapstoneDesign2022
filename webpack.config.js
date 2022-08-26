const path = require("path");

module.exports = {
  name: 'bapsim-react-setting',
  mode: 'development',
  devtool: 'eval',

  resolve: {
    extensions: ['.jsx']
  },

  entry: {
    app: ['./src/Components/client']
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties']
      }
    }]
  },
}