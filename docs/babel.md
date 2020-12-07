# Babel


- [@babel/core](https://www.npmjs.com/package/@babel/core) - Babel compiler core
    - [babel source analysis](https://github.com/FunnyLiu/babel/tree/readsource)
- [@babel/generator](https://babeljs.io/docs/en/babel-generator) - transform AST to js code 
- [@babel/node](https://www.npmjs.com/package/@babel/node) - Babel cli for node, use babel config to exec node js
- [@babel/polyfill](https://www.npmjs.com/package/@babel/polyfill) - Browser compatibility
- [@babel/register](https://www.npmjs.com/package/@babel/register) - add hook for require
    - [used by umi](https://github.com/FunnyLiu/umi/blob/readsource/packages/utils/src/BabelRegister/BabelRegister.ts#L28)
- [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) - babel's modular runtime helpers
    - [Why we need it?](https://omnipotent-front-end.github.io/library/babel.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81-babel-runtime-%E5%AE%83%E5%92%8C-babel-polyfill%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%EF%BC%9F)
- [babel-bridge](https://github.com/babel/babel-bridge) - A placeholder package that bridges babel-core to @babel/core. If you use some package that need babel-core, bu you use @babel/core, then you need it.
- [babel-eslint](https://github.com/babel/babel-eslint) - wrapper for babel's parser used for ESLint
- [babel-jest](https://www.npmjs.com/package/babel-jest) - Babel jest plugin



## plugins

- [@babel/plugin-proposal-class-properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-class-properties) - use properties in class
- [@babel/plugin-transform-function-name](https://www.npmjs.com/package/@babel/plugin-transform-function-name) - Apply ES2015 function.name semantics to all functions 
- [@babel/plugin-transform-modules-commonjs](https://www.npmjs.com/package/@babel/plugin-transform-modules-commonjs) - This plugin transforms ES2015 modules to CommonJS.
- [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import) - import antd dynamic
- [babel-plugin-lodash](https://github.com/lodash/babel-plugin-lodash) - Modular Lodash builds without the hassle.
- [babel-plugin-minify-replace](https://github.com/babel/minify/tree/master/packages/babel-plugin-minify-replace) - replace some string
- [babel-plugin-transform-class-properties](https://www.npmjs.com/package/babel-plugin-transform-class-properties) - support class properties as well as property initializer
- [babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx) - babel plugin for vue 2.0 jsx


## presets

- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) - preset of each environment
- [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react) - preset of React
- [@babel/preset-typescript](https://www.npmjs.com/package/@babel/preset-typescript) - preset of Typescript
