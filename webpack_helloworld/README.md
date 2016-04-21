#webpack练习1

参考地址：http://webpack.github.io/docs/tutorials/getting-started/

###1.安装webpack和loader依赖
``sh
npm install -g webpack //全局安装
npm install css-loader style-loader --save-dev //本项目安装
``


###1.打包 
``sh
webpack  
webpack --progress --colors //查看打包进度
webpack --progress --colors --watch //观察模式打包，实现实时自动打包
``

##2.测试
``sh
open index.html
``