#webpack练习1

参考地址：http://webpack.github.io/docs/tutorials/getting-started/

###1.安装webpack和loader依赖
`npm install --save-dev webpack webpack-dev-server css-loader style-loader`


###1.打包 
`webpack`
`webpack --progress --colors` //查看打包进度

`webpack --progress --colors --watch` //观察模式打包，实现实时自动打包

`webpack-dev-server --progress --colors` //以服务器模式启动

`webpack-dev-server --inline --hot`  //热部署模式启动，页面自动刷新


##2.测试
`open index.html`

`open http://localhost:8080/`    //服务器模式启动测试方式