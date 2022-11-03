##### 说明文件
  core 文件夹: api请求核心代码
  builder 文件夹: 解析swagger接口文件 生成ts📃文件

##### 1.进入 builder文件夹 

##### 2.运行npm run dev生成api文件

###### 3. 在此文件夹下运行 npm run build

##### 4.运行 npm run pub 输入版本号 发布版本


##### npm i api-swag-core --save

##### Notice

    1.此工具目前只是使用部分
    2.详细使用见下面链接
    [语雀文档](https://www.yuque.com/docs/share/55c674a1-2e1b-4bdf-baad-5e08a1a0feb7?#TypeScriptofSwaggerApi)
    
##### Other

    通常前端要定义一大堆接口来进行调用
    一旦后台的参数变更或者调整 前端则要手动修改

    然后 我们可以有一个工具 

    1. 自动解析后台的接口 包括： url 请求方式 入参 出参 
    2. 根据后台的controller生成不同模块的ts接口文档
    3. 构建一个类 里面包含了每个controller的方法
    4. 最重要的一步：他是自动构建出来的不需要手写 每次自动更新获取
    5. 这以后应该是前端的标配工具了
##### All

    1. 我们不需要再手动写定义接口的代码
    2. 根据生成的文档 我们可以根据代码提示 调用方法 传入参数