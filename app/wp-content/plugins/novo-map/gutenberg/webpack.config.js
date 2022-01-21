const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const ESLintPlugin = require( 'eslint-webpack-plugin' );
const StylelintPlugin = require( 'stylelint-webpack-plugin' );
const OptimizeCssAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const TerserPlugin = require( 'terser-webpack-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );

module.exports = ( env, argv ) => {
	function isDevelopment() {
		return argv.mode === 'development';
	}
	const config = {
		entry: {
			editor: './src/editor.js',
			script: './src/script.js',
			editor_script: "./src/editor_script.js",
		},
		output: {
			filename: '[name].js',
		},
		optimization: {
			minimizer: [
				new TerserPlugin(),
				new OptimizeCssAssetsPlugin( {
					cssProcessorOptions: {
						map: {
							inline: false,
							annotation: true,
						},
					},
				} ),
			],
		},
		plugins: [
			new CleanWebpackPlugin(),
			new StylelintPlugin( {
				fix: true,
			} ),
			new ESLintPlugin( {
				fix: true,
			} ),
			new MiniCssExtractPlugin( {
				chunkFilename: '[id].css',
				filename: ( chunkData ) => {
					return chunkData.chunk.name === 'script'
						? 'style.css'
						: '[name].css';
				},
			} ),
		],
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							plugins: [
								'@babel/plugin-proposal-class-properties',
							],
							presets: [
								'@babel/preset-env',
								[
									'@babel/preset-react',
									{
										pragma: 'wp.element.createElement',
										pragmaFrag: 'wp.element.Fragment',
										development: isDevelopment(),
									},
								],
							],
						},
					},
				},
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									plugins: [ 'autoprefixer' ],
								},
							},
						},
						'sass-loader',
					],
				},
			],
		},
		externals: {
			jquery: 'jQuery',
			lodash: 'lodash',
			'@wordpress/blocks': [ 'wp', 'blocks' ],
			'@wordpress/i18n': [ 'wp', 'i18n' ],
			'@wordpress/editor': [ 'wp', 'editor' ],
			'@wordpress/block-editor': [ 'wp', 'blockEditor' ],
			'@wordpress/components': [ 'wp', 'components' ],
			'@wordpress/element': [ 'wp', 'element' ],
			'@wordpress/data': [ 'wp', 'data' ],
			'@wordpress/api-fetch': ['wp', 'apiFetch'],
			'@wordpress/compose': ['wp', 'compose'],
		},
	};
	return config;
};
