module.exports = {
    entry: './www/js/hello-world.js',
    output: {
        path: './www',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
}
