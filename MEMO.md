## Webpack(version_4.43.0)環境構築
1. npm init -y
2. npm install --save-dev webpack@4.43.0 webpack-cli@3.3.11
3. touch webpack.config.js
4. webpack.config.jsにコードを記述
##  開発と本番用の設定ファイルをを追加
1. npm install --save-dev webpack-merge@5.0.9
2. touch webpack.common.js
3. webpack.config.jsを削除
4. touch webpack.dev.js 
5. touch webpack.prod.js /開発用とほぼ同じ
## scriptについて
- npm run dev /開発用でwatchモードになる（圧縮はされない）
- npm run build /本番用
## Cssloaderの設定
1. npm install --save-dev webpack webpack-cli css-loader style-loader
2. npm install --save-dev webpack webpack-cli css-loader style-loader mini-css-extract-plugin
3. webpack.common.jsにコードを追加 
