var webpack=require("webpack");

module.exports={
	entry:{
		app:'./entry.js', 
		vendor:['jquery']
	},
	output:{
		path:__dirname+"/build",
		filename:"bundle.js"
	},
	module:{
		loaders:[
     		{test:/\.css$/,loader:"style!css"}
		]
	}, 
	plugins:[
		new webpack.ProvidePlugin({
			//设置全局jquery
			$:"jquery",
			jQuery:"jquery",
			"window.jQuery":"jquery"
		}),
		//第三方库打包生成文件
		new webpack.optimize.CommonsChunkPlugin('vendor','vendor.js')
	]
}