var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

module.exports = {
  entry: {
    vendor: './src/vendor.ts',
    polyfills: './src/polyfills.ts',
    app: './src/app.ts',
    kotlin: './lib/kotlin-js/kotlin.js'
  },
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },
  devtool: '#source-map',   // Uncomment to enable SourceMaps
  resolve: {
    alias: {
      assets: __dirname + "/assets",
      content: __dirname + "/content"
    },
    extensions: ['.ts', '.js']
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader'
          ]
      }, {
        test: /\.html$/,
        exclude: ['./src/index.html'],
        loader: 'html-loader'
      }, {
        test: /\.(pug|jade)$/,
        exclude: /node_modules/,
        loaders: [
          'html-loader',
          {
            loader: 'pug-html-loader',
            options: {
              exports: false
            }
          }
        ]
      }, {
        test: /\.(scss|sass)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }, {
        test: /\.(jpe?g|png)$/i,
        loader: 'file-loader'
      }, {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      // Must disable mangle or else Angular is unhappy and no-worky
      mangle: false,
      comments: false,
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    }),

    new HtmlWebpackPlugin({
      title: 'Angular2 Compilation',
      template: 'src/index.html',
      chunksSortMode: 'dependency'
    }),

    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    ),

    new DashboardPlugin(dashboard.setData)
  ],
  devServer: {
    port: 8000,
    host: 'localhost'
  }
};