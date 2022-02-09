const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require("webpack");
const TerserPlugin = require('terser-webpack-plugin');

const PROD = (process.env.NODE_ENV === 'production');
module.exports = {
  mode: 'development',
  plugins: [
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
      algorithm: "gzip",
    }),
  ],
  entry: {
    main: path.resolve(__dirname, './client/src/index.jsx'),
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpeg|gif|jpg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            }
          },
        ],
      },
      {
        test: /\.html$/i,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    minimize: PROD,
    minimizer: [
      new TerserPlugin({ parallel: true })
    ],
  },
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: PROD ? 'bundle.min.js' : 'bundle.js'
  },
};