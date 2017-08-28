const path = require('path');

module.exports = {
	devtool: 'eval-source-map',
	entry: './app/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	devServer: {
		contentBase: "./public",
		historyApiFallback: true,
		inline: true
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader",
			}
		}]
	}
};