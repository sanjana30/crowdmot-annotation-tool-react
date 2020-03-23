require('dotenv').config();
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'eval',
	entry: 'apps/demo/index.js',
	// entry: {
	// 	    index: 'apps/demo/index.js',
	// 	     another: 'apps/demo/another-module.js',
	// 	     index: { import: 'apps/demo/index.js', dependOn: 'shared' },
	// 	     another: { import: 'apps/demo/another-module.js', dependOn: 'shared' },
	// 	     shared: 'lodash',
	// 		},
			
	entry: {
		app: [
		  'react-app-polyfill/ie9', // Only if you want to support IE 9
		  'react-app-polyfill/stable',
		  'apps/demo/index.js',
		],
	  },
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/dist/',
		filename: 'demo.bundle.js',
	},
	devServer: {
		contentBase: path.join(__dirname, 'public/'),
		host: process.env.HOST,
		port: process.env.PORT,
		publicPath: process.env.PUBLIC_PATH,
		hotOnly: true,
	},
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	  },
	  resolve: {
        extensions: ['.js'],
        alias: {
            fs: path.resolve(__dirname, 'src/mock-fs.js')
        }
    },
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			// ...env.stringified,
			'process.env.FLUENTFFMPEG_COV': false
		})
	],
});
