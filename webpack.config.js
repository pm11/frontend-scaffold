const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: `${__dirname}/src/index.ts`,
  output: {
    path: `${__dirname}/public`,
    filename: 'index.js',
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.json',
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: 'development',
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Designfy demo',
      template: 'templates/index.html',
    })
  ],
}
