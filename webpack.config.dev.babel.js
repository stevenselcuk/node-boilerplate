const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');
const path = require('path')
const WebpackBar = require('webpackbar');

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
		new WebpackBar(),
		new NodemonPlugin({
    // args: ['demo'],

    // What to watch.
    watch: path.resolve('./dist'),

    // Files to ignore.
    ignore: ['*.js.map'],

    // Detailed log.
    verbose: true,

    // Node arguments.
    //  nodeArgs: ['--debug=9222'],

    // If using more than one entry, you can specify
    // which output file will be restarted.
    script: './dist/server.js',

    // Extensions to watch
    ext: 'js,njk,json',
}),
		 new LodashModuleReplacementPlugin
	]
};
