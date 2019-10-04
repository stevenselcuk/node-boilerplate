const WebpackShellPlugin = require("webpack-shell-plugin");

module.exports = {
	entry: ["./src"],
	target: "node",
	mode: 'production',
	watch: true,
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
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
		})
	]
};
