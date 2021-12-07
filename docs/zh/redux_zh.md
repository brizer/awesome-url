# Redux

- [redux](https://www.npmjs.com/package/redux) - Redux是JavaScript应用程序的可预测状态容器
    - [源码分析](https://github.com/FunnyLiu/redux/tree/readsource)
- [redux-logger](https://www.npmjs.com/package/redux-logger) - redux的日志中间件
    - [源码分析](https://github.com/FunnyLiu/redux-logger/tree/readsource)
- [redux-persist](https://github.com/rt2zz/redux-persist) - 持久化中间件 ![img](https://img.shields.io/github/stars/rt2zz/redux-persist)
- [redux-promise-middleware](https://www.npmjs.com/package/redux-promise-middleware) - 异步中间件
- [redux-saga](https://github.com/redux-saga/redux-saga/) - 强大的异步控制中间件，基于generator ![img](https://img.shields.io/github/stars/redux-saga/redux-saga/)
    - [源码分析](https://github.com/FunnyLiu/redux-saga/tree/readsource)
    - [官方异步请求例子](https://github.com/FunnyLiu/redux-saga/blob/readsource/examples/async/README.md#%E8%A7%A3%E8%AF%BB) - aciton/reducer/sagas相互之间配合使用
    - [官方可以手动中断的倒计时例子](https://github.com/FunnyLiu/redux-saga/blob/readsource/examples/cancellable-counter/README.md#%E8%A7%A3%E8%AF%BB) - 在saga如何中断promise
    - [官方一个基本的计数器](https://github.com/FunnyLiu/redux-saga/blob/readsource/examples/counter/README.md#%E8%A7%A3%E8%AF%BB)
    - [官方umd的方式在非react场景中用](https://github.com/FunnyLiu/redux-saga/blob/readsource/examples/counter-vanilla/README.md#%E8%A7%A3%E8%AF%BB)
    - [官方各种error的表现形式](https://github.com/FunnyLiu/redux-saga/blob/readsource/examples/error-demo/README.md#%E8%A7%A3%E8%AF%BB)
    - [官方一个小型项目的最佳实践](https://github.com/FunnyLiu/redux-saga/blob/readsource/examples/real-world/README.md#%E8%A7%A3%E8%AF%BB)
- [redux-thunk](https://www.npmjs.com/package/redux-thunk) - Thunk中间件，使得dispatch可以接收函数而不仅仅的对象
    - [源码分析](https://github.com/FunnyLiu/redux-thunk/tree/readsource)
- [redux-toolkit](https://github.com/reduxjs/redux-toolkit) - redux官方提供的最佳实践封装 ![img](https://img.shields.io/github/stars/reduxjs/redux-toolkit)
    - [基于toolkit和axios的demo]](https://github.com/FunnyLiu/reactGo/blob/readsource/app_toolkit/reducers/index.ts#L10)


## 示例

- [reactGo](https://github.com/reactGo/reactGo) - react redux的实例，包括了thunk、saga、toolkit等多个方案的实践
    
    


## 测试

- [redux-mock-store](https://github.com/reduxjs/redux-mock-store#readme) - 用于测试Redux异步动作创建者和中间件的模拟存储。 ![img](https://img.shields.io/github/stars/reduxjs/redux-mock-store#readme)