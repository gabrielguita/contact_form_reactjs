import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import autoprefixer from 'autoprefixer'
import path from 'path'
import Dashboard from 'webpack-dashboard'
import DashboardPlugin from 'webpack-dashboard/plugin'

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist'),
}

export default {
  entry: [
    PATHS.app,
  ],
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: '/',
  },
  stats: {
    colors: true,
    reasons: true, //if fail, show it very verbose
  },
  resolve: {
    root: path.resolve('./app'),
  },
  module: {
    loaders: [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=font/[name].[ext]' },
      { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=font/[name].[ext]' },
      { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=font/[name].[ext]' },
      { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=font/[name].[ext]' },
      { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=font/[name].[ext]' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=./app/img/[name].[ext]' },
      { test: /\.ico$/, loader: 'file?name=[name].[ext]' },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.scss$/, loaders: ['style', 'css?sourceMap&modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]', 'sass?sourceMap'] },
      { test: /\.ico$/, loader: 'file?name=[name].[ext]&context=./app/' },
    ],
  },
  sassLoader: {
    data: '$env: ' + process.env.NODE_ENV + ';',
  },
  postcss: [autoprefixer],
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: PATHS.build,
    hot: true,
    inline: true,
    progress: true,
    quiet: true,
  },
  debug: true,
  noInfo: true,
  plugins: [
    new DashboardPlugin(Dashboard.setData),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('./app/index.ejs'),
      inject: true,
    }),
  ],
}
