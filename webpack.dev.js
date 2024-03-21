const path = require("path"),
    webpack = require("webpack"),
    webpackCommon = require("./webpack.common")

module.exports = {
    ...webpackCommon,
    mode: "development",
    // Development Server. http://localhost:3000
    devServer: {
        historyApiFallback: true,
        // contentBase: path.resolve(__dirname, '../dist'),
        open: true,
        compress: true,
        hot: true,
        port: 3000
    },
    module: {
        rules: [
            ...webpackCommon.module.rules,
            {
                test: path.resolve(__dirname, "public/index.html"),
                loader: "string-replace-loader",
                options: {
                    search: "__CONFIG__BACKEND_URL__",
                    replace: "TEST123"
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            Buffer: ["buffer", "Buffer"],
            process: "process/browser"
        }),
        // Only update what has changed on hot reload
        new webpack.HotModuleReplacementPlugin()
    ]
}
