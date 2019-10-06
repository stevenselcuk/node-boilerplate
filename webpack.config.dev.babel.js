const WebpackShellPlugin = require('webpack-shell-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
	entry: ["./src"],
	target: "node",
	mode: 'development',
	watch: true,
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
	        plugins: ['lodash'],
	        presets: [['@babel/preset-env', { modules: false, targets: { node: 'current' } }]]
       },
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["eslint-loader"]
			}
		]
	},
	output: {
		path: `${__dirname}/dist`,
		publicPath: "/",
		filename: "server.js"
	},
	plugins: [
		new WebpackShellPlugin({
			onBuildEnd: ["nodemon dist/server.js — watch dist/server.js"]
		}),
		 new LodashModuleReplacementPlugin
	]
};
