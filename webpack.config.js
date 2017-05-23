var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './src',
  ],
  devtool: 'cheap-module-source-map',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js']
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Isaac Madwed',
      template: './src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '\'' + process.env.NODE_ENV + '\''
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      { test: /\.otf$/, loader: 'url-loader?limit=50000'},
      { test: /\.(png|gif|jpg|jpeg)$/, loader: 'url-loader?limit=50000'},
      { test: /\.jsx?$/,
        loaders: ['babel'],
        include: [
          path.resolve(__dirname, "src"),
        ]
      },
      { test: /\.json$/, loaders: ['json-loader'], exclude: /(node_modules|lib)/ },
      { test: /\.svg$/, loader: 'babel!svg-react' }
    ]
  },
  resolve: {
    fallback: path.join(__dirname, 'node_modules'),
    extensions: ['', '.js', '.css'],
  },
  resolveLoader: { fallback: path.join(__dirname, 'node_modules') }
};
