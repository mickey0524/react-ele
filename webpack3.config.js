// 由于历史原因，本项目使用的是webpack1，这里给出webpack3的配置文件

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src'); //__dirname 中的src目录，以此类推
const APP_FILE = path.resolve(APP_PATH, 'App.jsx'); //根目录文件app.jsx地址

const isProduction = process.env.NODE_ENV === 'production';
const publicPath = isProduction ? '/public/dist' : '/dist';
const config = {
  entry: {
    app: [
      APP_FILE,
      'webpack-hot-middleware/client'
    ]
  },
  output: {
    publicPath, //编译好的文件，在服务器的路径,这是静态资源引用路径
    path: isProduction ? `${ROOT_PATH}/public/dist/` : `${ROOT_PATH}/dist`, //发布文件地址
    filename: '[name].js', //编译后的文件名字
    chunkFilename: '[name].[chunkhash:5].min.js'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'image/[name].[ext]?[hash]'
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: [APP_PATH],
        use: [
          {
            loader: 'react-hot-loader'
          },
          {
            loader: 'jsx-loader'
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ["es2015", "react", "stage-0"]
            }
          }
        ]
      }
    ]
  },
  devtool: isProduction ? false : '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
        filename: '../index.html', //生成的html存放路径，相对于 path
        template: './src/template/index.html', //html模板路径
        hash: isProduction
    }),
    new webpack.optimize.CommonsChunkPlugin({    // 提取公共代码，swiper之类
      name: 'common',
      filename: 'common.min.js'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.css', 'json'], //后缀名自动补全
  }
};

if (isProduction) {
  config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
          comments: false, // remove all comments
      },
      compress: {
          warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}

module.exports = config;
