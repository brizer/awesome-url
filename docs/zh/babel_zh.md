# Babel

- [@babel/core](https://www.npmjs.com/package/@babel/core) - Babel编译核心
    - [babel生态及源码分析](https://github.com/FunnyLiu/babel/tree/readsource)
- [@babel/generator](https://babeljs.io/docs/en/babel-generator) - 将AST转换成js代码，内置流程的工具
- [@babel/node](https://www.npmjs.com/package/@babel/node) - Babel的node命令行工具，使用babel的配置来执行nodejs文件
- [@babel/polyfill](https://www.npmjs.com/package/@babel/polyfill) - 浏览器的兼容性
- [@babel/register](https://www.npmjs.com/package/@babel/register) - 通过API给require增加处理钩子
    - [被umi使用](https://github.com/FunnyLiu/umi/blob/readsource/packages/utils/src/BabelRegister/BabelRegister.ts#L28)
- [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) - babel模块的运行时帮助函数集
    - [为什么需要runtime](https://omnipotent-front-end.github.io/library/babel.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81-babel-runtime-%E5%AE%83%E5%92%8C-babel-polyfill%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%EF%BC%9F)
- [babel-bridge](https://github.com/babel/babel-bridge) - 联通babel-core到@babel/core。 如果你使用的某个包需要babel-core，而你却使用的@babel/core，则你需要它。
- [babel-eslint](https://github.com/babel/babel-eslint) - 适配eslint和babel
- [babel-jest](https://www.npmjs.com/package/babel-jest) - Babel的jest插件

## 插件

- [@babel/plugin-proposal-class-properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-class-properties) - 使用class的属性语法
- [@babel/plugin-transform-function-name](https://www.npmjs.com/package/@babel/plugin-transform-function-name) - 使用function.name语法的插件
- [@babel/plugin-transform-modules-commonjs](https://www.npmjs.com/package/@babel/plugin-transform-modules-commonjs) - 将ES2015的模块转为commonjs模块
- [babel-plugin-bulk-import](https://github.com/madshall/babel-plugin-bulk-import) - glob语法import多文件 ![img](https://img.shields.io/github/stars/madshall/babel-plugin-bulk-import)
- [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import) - 动态加载antd
- [babel-plugin-lodash](https://github.com/lodash/babel-plugin-lodash) - lodash拆分引入的插件，lodash官方提供
- [babel-plugin-minify-replace](https://github.com/babel/minify/tree/master/packages/babel-plugin-minify-replace) - 转换某些字符串
- [babel-plugin-transform-class-properties](https://www.npmjs.com/package/babel-plugin-transform-class-properties) - 支持class的属性类似属性初始化语法
- [babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx) - 启用vue的jsx语法

## 预设集

- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) - 各个环境的预设集
- [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react) - React 的预设集
- [@babel/preset-typescript](https://www.npmjs.com/package/@babel/preset-typescript) - Typescript 的预设集