const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// Client Page
module.exports = {
	mode: 'development',
	entry: './src/frontend/dev/ts/clients/app/ClientPage.ts',
	output: {
		path: path.resolve(__dirname + '/src/frontend/public/js'),
		filename: 'client.js',
	},
	module: {
		rules: [
			{
				test: /\.(jpg|jpeg|png)$/,
				use: 'url-loader',
			},
			// Include pug-loader to process the pug files
			{
				test: /\.pug$/,
				use: 'pug-loader',
			},
			{
				test: /\.sass$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
				test: /\.ts?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: '../../public/views/clients.html',
			template: './src/frontend/dev/pug/5-pages/clients.pug',
		}),
	],
};
