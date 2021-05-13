const path = require('path');
const MiniCssPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/bundle.js',
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          MiniCssPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins:[
    new MiniCssPlugin({
      filename: 'style.css'
    })
  ]
};
