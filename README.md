#### 目录说明
 ```
    └── packages
        ├── api-generator 构建api的工具
        │   └── src
        │       ├── bin
        │       ├── config 配置文件 可以配置swagger地址 生成自己的api
        │       ├── lib
        │       └── tpl
        ├── api-swag-core 被构建的核心文件 可以发起请求
        │   ├── dist
        │   │   ├── lib
        │   │   └── types
        │   ├── docs
        │   │   ├── assets
        │   │   └── variables
        │   ├── src
        │   │   ├── api
        │   │   ├── core
        │   │   └── types
        │   └── tools
        └── demo          使用例子vue3项目
            ├── public
            └── src
                ├── assets
                └── components
 ```
#### 主要功能
    根据 swagger 文档生成 typescript 客户端调用代码
#### 构建方式
    1.运行： npm run build:api

    2.输出： packages/api-swag-core/src

    1. 打包api： npm run build:core
#### 使用方式
    在packages/demo中

    引入 import API from "api-swag-core"

    打印 console.log(API, "API")

 ![例子](https://raw.githubusercontent.com/stogefei/swagger-api-generator/master/api-demo.gif)
