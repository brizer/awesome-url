# Webpack

## Project

- [webpackDemo](https://github.com/FunnyLiu/webpackDemo) - some demo build by brizer

## loader

- [babel-loader](https://www.npmjs.com/package/babel-loader) - loader for babel
    - [use babel and jsx simply](https://github.com/FunnyLiu/webpackDemo#babel-loader-%E5%BC%95%E5%85%A5-jsx-demo03_babelloader)
- [cache-loader](https://github.com/webpack-contrib/cache-loader) - Caches the result of following loaders on disk
- [css-loader](https://www.npmjs.com/package/css-loader) - support import css
- [ejs-loader](https://github.com/difelice/ejs-loader) - EJS (Underscore/LoDash Templates) loader for webpack
- [eslint-loader](https://github.com/webpack-contrib/eslint-loader) - A ESlint loader for webpack
- [file-loader](https://github.com/webpack-contrib/file-loader) - File Loader
- [html-loader](https://github.com/webpack-contrib/html-loader) - HTML Loader
- [less-loader](https://github.com/webpack-contrib/less-loader) - loader for less
    - [use less simply](https://github.com/FunnyLiu/webpackDemo#%E4%BD%BF%E7%94%A8less%E6%9D%A5%E7%AE%A1%E7%90%86%E9%A1%B5%E9%9D%A2%E6%A0%B7%E5%BC%8F-by-demo22_less)
    - [use it with css module and react](https://github.com/FunnyLiu/webpackDemo#%E4%BD%BF%E7%94%A8less%E9%80%9A%E8%BF%87css-module%E6%9D%A5%E7%AE%A1%E7%90%86react%E7%BB%84%E4%BB%B6-by-demo23_less_cssmodule)
- [raw-loader](https://github.com/webpack-contrib/raw-loader) - A loader for webpack that allows importing files as a String
- [style-loader](https://www.npmjs.com/package/style-loader) - Add css to dom by style tag
- [ts-loader](https://github.com/TypeStrong/ts-loader) - ts loader for webpack
- [url-loader](https://github.com/webpack-contrib/url-loader) - A loader for webpack which transforms files into base64 URIs
- [vue-loader](https://github.com/vuejs/vue-loader) - <g-emoji class="g-emoji" alias="package" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4e6.png">📦</g-emoji> Webpack loader for Vue.js components

## plugins

- [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) - A webpack plugin to remove your build folder(s) before building
- [copy-webpack-plugin](https://www.npmjs.com/package/copy-webpack-plugin) - Copy files to build directory
- [create-file-webpack](https://github.com/Appius/create-file-webpack) - The simple webpack plugin to create a file with the particular content at the end of the build process
    - [can be used for generate sitemap]
- [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin) - Plugin that simplifies creation of HTML files to serve your bundles
- [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) - Lightweight CSS extraction plugin
- [sentry-webpack-plugin](https://github.com/getsentry/sentry-webpack-plugin) - Official webpack plugin for Sentry <a href="https://sentry.io" rel="nofollow">https://sentry.io</a>
- [size-plugin](https://github.com/GoogleChromeLabs/size-plugin) - Track compressed Webpack asset sizes over time.
- [speed-measure-webpack-plugin#readme](https://github.com/stephencookdev/speed-measure-webpack-plugin#readme) - <g-emoji class="g-emoji" alias="stopwatch" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/23f1.png">⏱</g-emoji> See how fast (or not) your plugins and loaders are, so you can optimise your builds
- [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) - Webpack plugin and CLI utility that represents bundle content as convenient interactive zoomable treemap
- [webpack-subresource-integrity](https://github.com/waysact/webpack-subresource-integrity) - Webpack plugin for enabling Subresource Integrity.
- [write-file-webpack-plugin](https://github.com/gajus/write-file-webpack-plugin) - Forces webpack-dev-server to write bundle files to the file system.


## others

- [webpack](https://www.npmjs.com/package/webpack) - webpack is a module bundler
    - [Overall workflow](http://omnipotent-front-end.github.io/library/webpack.html#%E6%95%B4%E4%BD%93%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B%E6%98%AF%E4%BB%80%E4%B9%88%E6%A0%B7%E5%AD%90%E7%9A%84%EF%BC%9F)
    - [diff between loader and plugin](http://omnipotent-front-end.github.io/library/webpack.html#loader%E5%92%8Cplugin%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%EF%BC%9F%E5%85%B7%E4%BD%93%E4%B8%BE%E4%B8%80%E4%BA%9B%E5%B8%B8%E7%94%A8%E7%9A%84%E5%92%8C%E5%85%B6%E4%BD%9C%E7%94%A8%E3%80%82)
    - [The principle of webpack hot update](http://omnipotent-front-end.github.io/library/webpack.html#webpack%E7%83%AD%E6%9B%BF%E6%8D%A2%E7%9A%84%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F)
    - [pack ui library for elementui](https://github.com/FunnyLiu/element/tree/readsource)
    - [how to optim webpack](https://brizer.github.io/static/html/webpack-opt.html)
- [webpack-chain](https://github.com/neutrinojs/webpack-chain) - chaining API to generate Webpack configuration.
- [webpack-cli](https://www.npmjs.com/package/webpack-cli) - use webpack in cli
    - [Overall execution process](https://github.com/DDFE/DDFE-blog/issues/12)
- [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard) - A CLI dashboard for webpack dev server
- [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) - development server for webpack
- [webpack-merge](https://github.com/survivejs/webpack-merge) - merge webpack config, for multi config file
    - [a vue project created by vue-cli2, use multi config file to build](https://github.com/FunnyLiu/vueDemo/blob/master/vueCliDemo/vueCli2/old/build/webpack.dev.conf.js#L5)


































































































