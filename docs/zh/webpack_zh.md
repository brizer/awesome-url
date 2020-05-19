# Webpack

## 项目实例

- [webpackDemo](https://github.com/FunnyLiu/webpackDemo) - 我的各种小demo，代码片段

## loader

- [babel-loader](https://www.npmjs.com/package/babel-loader) - babel的loader
    - [简单使用babel和jsx](https://github.com/FunnyLiu/webpackDemo#babel-loader-%E5%BC%95%E5%85%A5-jsx-demo03_babelloader)
- [cache-loader](https://github.com/webpack-contrib/cache-loader) - 可以在一些性能开销较大的 Loader 之前添加，目的是将结果缓存到磁盘里
- [css-loader](https://www.npmjs.com/package/css-loader) - 支持引入css
- [ejs-loader](https://github.com/difelice/ejs-loader) - .ejs文件的loader
- [eslint-loader](https://github.com/webpack-contrib/eslint-loader) - eslint的loader
- [file-loader](https://github.com/webpack-contrib/file-loader) - png等图片文件的loader
- [html-loader](https://github.com/webpack-contrib/html-loader) - HTML文件的loader
- [less-loader](https://github.com/webpack-contrib/less-loader) - 针对less的loader
    - [简单的使用less](https://github.com/FunnyLiu/webpackDemo#%E4%BD%BF%E7%94%A8less%E6%9D%A5%E7%AE%A1%E7%90%86%E9%A1%B5%E9%9D%A2%E6%A0%B7%E5%BC%8F-by-demo22_less)
    - [和cssmodule,react一起使用](https://github.com/FunnyLiu/webpackDemo#%E4%BD%BF%E7%94%A8less%E9%80%9A%E8%BF%87css-module%E6%9D%A5%E7%AE%A1%E7%90%86react%E7%BB%84%E4%BB%B6-by-demo23_less_cssmodule)
- [raw-loader](https://github.com/webpack-contrib/raw-loader) - txt文件转为字符串的loader
- [style-loader](https://www.npmjs.com/package/style-loader) - 通过style标签将css加到dom中去
- [ts-loader](https://github.com/TypeStrong/ts-loader) - typescript的loader
- [url-loader](https://github.com/webpack-contrib/url-loader) - 转换图片文件到base64
- [vue-loader](https://github.com/vuejs/vue-loader) - vue文件的loader

## plugins

- [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) - 目录清理
- [copy-webpack-plugin](https://www.npmjs.com/package/copy-webpack-plugin) - 复制文件到生成目录
- [create-file-webpack](https://github.com/Appius/create-file-webpack) - 在webpack打包过程中创建文件内容
    - [可用于生成网站地图sitemap]
- [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin) - 简化html创建和启动服务的插件
- [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) - 分离样式文件，CSS 提取为独立文件，css分离插件
- [sentry-webpack-plugin](https://github.com/getsentry/sentry-webpack-plugin) - Sentry官方的webpack插件 <a href="https://sentry.io" rel="nofollow">https://sentry.io</a>
- [size-plugin](https://github.com/GoogleChromeLabs/size-plugin) - ：监控资源体积变化，尽早发现问题
- [speed-measure-webpack-plugin#readme](https://github.com/stephencookdev/speed-measure-webpack-plugin#readme) - 记录各个loader和插件的耗时，方便排查构建速度
- [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin) - js最小化 ![img](https://img.shields.io/github/stars/webpack-contrib/terser-webpack-plugin)
- [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) - 可视化分析webpack依赖模块大小
- [webpack-subresource-integrity](https://github.com/waysact/webpack-subresource-integrity) - 使用Subresource Integrity的webbpack插件
- [write-file-webpack-plugin](https://github.com/gajus/write-file-webpack-plugin) - 使得webpack-dev-server将打包文件写到文件系统中


## others


- [webpack](https://www.npmjs.com/package/webpack) - webpack 是模块打包器
    - [整体工作流程](http://omnipotent-front-end.github.io/library/webpack.html#%E6%95%B4%E4%BD%93%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B%E6%98%AF%E4%BB%80%E4%B9%88%E6%A0%B7%E5%AD%90%E7%9A%84%EF%BC%9F)
    - [loader和plugin之间的区别是什么？](http://omnipotent-front-end.github.io/library/webpack.html#loader%E5%92%8Cplugin%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%EF%BC%9F%E5%85%B7%E4%BD%93%E4%B8%BE%E4%B8%80%E4%BA%9B%E5%B8%B8%E7%94%A8%E7%9A%84%E5%92%8C%E5%85%B6%E4%BD%9C%E7%94%A8%E3%80%82)
    - [webpack热更新的原理](http://omnipotent-front-end.github.io/library/webpack.html#webpack%E7%83%AD%E6%9B%BF%E6%8D%A2%E7%9A%84%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F)
    - [打包前端组件库如elementui](https://github.com/FunnyLiu/element/tree/readsource)
    - [可视化方案分析 webpack 打包性能瓶颈](https://brizer.github.io/static/html/webpack-opt.html)
- [webpack-chain](https://github.com/neutrinojs/webpack-chain) - 链式API生成webpack配置文件
- [webpack-cli](https://www.npmjs.com/package/webpack-cli) - 在命令行中使用webpack
    - [整体执行流程](https://github.com/DDFE/DDFE-blog/issues/12)
- [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard) - 可以更友好的展示相关打包信息，配合webpack-dev-server使用
- [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) - webpack的专属开发环境服务器
- [webpack-merge](https://github.com/survivejs/webpack-merge) - 合并webpack配置，方便多文件场景
    - [vue-cli2搭建的vue项目，基于多个webpack配置文件管理](https://github.com/FunnyLiu/vueDemo/blob/master/vueCliDemo/vueCli2/old/build/webpack.dev.conf.js#L5)
