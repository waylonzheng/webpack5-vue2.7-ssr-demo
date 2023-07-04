
### 体验：
```
pnpm i
pnpm build
pnpm start
```
### 坑点：
https://v2.cn.vuejs.org/v2/guide/migration-vue-2-7.html

### 目录:
```
📦webpack5-vue2.7-ssr-demo-waylon
 ┣ 📂build - 构建相关
 ┃ ┣ 📜util.js - 公共方法
 ┃ ┣ 📜webpack.base.js - 基本构件配置
 ┃ ┣ 📜webpack.client.js - 客户端配置
 ┃ ┣ 📜webpack.config.js - 构建入口
 ┃ ┣ 📜webpack.dev.js - 本地开发
 ┃ ┗ 📜webpack.server.js - 服务端构建
 ┣ 📂dist - Express static目录 以及 构建产物地址
 ┃ ┣ 📂client - 客户端产物
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜vue-ssr-client-manifest.json
 ┃ ┗ 📂server - 服务端产物
 ┃ ┃ ┗ 📜vue-ssr-server-bundle.json
 ┣ 📂public - 模板
 ┃ ┣ 📜index.ejs - 生产环境模板
 ┃ ┗ 📜template.html - 本地开发模板
 ┣ 📂src
 ┃ ┣ 📂controllers - Express controller
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂routes - Express route  服务器路由
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂services - Express service
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂vue - vue 静态页面代码
 ┃ ┃ ┣ 📂pages - 前端页面
 ┃ ┃ ┃ ┣ 📂About
 ┃ ┃ ┃ ┃ ┗ 📜index.vue
 ┃ ┃ ┃ ┗ 📂Home
 ┃ ┃ ┃ ┃ ┗ 📜index.vue
 ┃ ┃ ┣ 📂router 前端路由
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📜app.js 处理app.vue
 ┃ ┃ ┣ 📜App.vue 根组件
 ┃ ┃ ┣ 📜entry-client.js 客户端入口
 ┃ ┃ ┣ 📜entry-server.js 服务端入口
 ┃ ┃ ┗ 📜main.js 入口文件
 ┃ ┗ 📜index.js Express执行文件
 ┣ 📜.gitignore
 ┣ 📜.prettierrc.js
 ┣ 📜package.json
 ┣ 📜pnpm-lock.yaml
 ┗ 📜README.md
 ```