module.exports = {
  title: "Awesome-url",
  base:'/urls/',
  locales: {
    "/": {
      lang: "en-US",
      title: "Awesome-url",
      description: "Awesome url"
    },
    "/zh/": {
      lang: "中文",
      title: "Awesome-url",
      description: "了不起的url"
    }
  },
  themeConfig: {
    algolia:{
      apiKey:'60ba0be7ab4084ad1306fe8615ed0ed4',
      indexName:'brizer-awesome-url'
    },
    locales: {
      "/": {
        sidebar: {
          "": [
            {
              title: "API",
              children: ["/api"]
            },
            {
              title: "Online Tools",
              children: ["/online"]
            },
            {
              title: "Frameworks",
              children: [
                "/babel",
                "/docker",
                "/express",
                '/lint',
                "/nest",
                "/react",
                "/redux",
                "/rollup",
                "/typescript",
                "/vue",
                "/webpack"
              ]
            },
            {
              title: "Node Modules",
              children: ["/node_modules"]
            },
            {
              title: "Information Flow",
              children: ["/information_flow"]
            },
            {
              title: "Mac Tools App",
              children: ["/mac"]
            },
            {
              title: "Dev Tools",
              children: ["/dev"]
            }
          ]
        }
      },
      "/zh/": {
        sidebar: {
          "/zh/": [
            {
              title: "接口文档",
              children: ["/zh/api"]
            },
            {
              title: "在线工具",
              children: ["/zh/online"]
            },
            {
              title: "框架和库",
              children: [
                "/zh/babel_zh",
                "/zh/docker_zh",
                "/zh/express_zh",
                '/zh/lint_zh',
                "/zh/nest_zh",
                "/zh/react_zh",
                "/zh/redux_zh",
                "/zh/rollup_zh",
                "/zh/typescript_zh",
                "/zh/vue_zh",
                "/zh/webpack_zh"
              ]
            },
            {
              title: "Node模块",
              children: ["/zh/node_modules_zh"]
            },
            {
              title: "信息流",
              children: ["/zh/information_flow_zh"]
            },
            {
              title: "Mac工具",
              children: ["/zh/mac_zh"]
            },
            {
              title: "开发工具",
              children: ["/zh/dev_zh"]
            }
          ]
        }
      }
    }
  }
};