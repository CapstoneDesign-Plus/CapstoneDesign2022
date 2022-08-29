const path = require('path');

module.exports = {
  name: 'bapsim-react-setting',
  mode: 'development',
  devtool: 'eval',

  resolve: {
    extensions: ['.tsx', '.js', '.jsx', '.ts']
  },

  entry: {
    app: ['./src/components/App']
  },

  output: {
    path: path.join(__dirname, 'react-public'),
    filename: 'app.js'
  },

  module: {
    rules: [{
      test: /\.tsx/,
      loader: 'ts-loader',
      // options: {
      //   presets: [
      //     '@babel/preset-env', 
      //     ['@babel/preset-react', { 'runtime': 'automatic' }]
      //   ],
      //   plugins: [
      //     '@babel/plugin-proposal-class-properties',
      //     // '@babel/plugin-transform-runtime'
      //   ]
      // }
    }
    //,{
    //   test: /\.css?/,
    //   exclude: [],
    //   use: ["style-loader", "css-loader", "postcss-loader"]
    // }
    ]
  },
}