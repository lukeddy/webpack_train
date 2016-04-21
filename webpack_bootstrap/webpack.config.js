var webpack=require("webpack");

module.exports={
	context:__dirname+'/src',

	resolve: {
	    alias: {
	        'jquery': __dirname + '/bower_components/jquery/dist/jquery.js',
	        // 'jquery.plugin1': __dirname + '/vendor/jquery.plugin1.js',
	        // 'jquery.plugin2': __dirname + '/vendor/jquery.plugin2.js',
	        'module1': __dirname + '/src/module1.js'
	    }
	},
	entry:{
		main:'./main.js'
	},
	output:{
		path:__dirname+"/built",
		filename:"[name].bundle.js"
	}
	
}