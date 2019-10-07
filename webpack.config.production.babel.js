const WebpackBar = require('webpackbar');

module.exports = {
	entry: ["./src"],
	target: "node",
	mode: 'production',
	watch: false,
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
		new WebpackBar(),
	]
};
