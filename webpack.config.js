var webpack = require('webpack'),
    port = 8080,
    config = {
        entry: [
            'webpack-dev-server/client?http://localhost:' + port,
            'webpack/hot/only-dev-server',
            './index.js'
        ],
        output: {
            path: __dirname + '/dist',
            filename: 'app.js'
        },
        module: {
            rules: [
                {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devtool: 'source-map',
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ],
        devServer: {
            port: port,
            historyApiFallback: true,
            hot: true,
            contentBase: '.',
            host: '0.0.0.0'
        },
        bail: true
    };

module.exports = config;
