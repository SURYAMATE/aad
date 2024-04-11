const webpack = require("webpack"),
    webpackCommon = require("./webpack.common"),
    CopyWebpackPlugin = require("copy-webpack-plugin"),
    TerserPlugin = require("terser-webpack-plugin"),
    path = require("path")

const PACKAGE = require("./package.json"),
    FILE_VERSION = PACKAGE.version.replace(/\./g, "")

const releasePath = path.join(__dirname, "dist")

module.exports = {
    ...webpackCommon,
    mode: "production",
    output: {
        path: releasePath,
        filename: `bundle-${FILE_VERSION}.js`
    },
    module: {
        rules: [
            {
                test: /AppConfig\.ts$/,
                loader: "string-replace-loader",
                options: {
                    search: "__APPCONFIG_ENDPOINT__",
                    replace: ""
                }
            },
            ...webpackCommon.module.rules
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false
                    }
                },
                extractComments: false
            })
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            Buffer: ["buffer", "Buffer"]
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, "public"),
                    to: "./",
                    globOptions: {
                        ignore: [path.join(__dirname, "public/index.html")]
                    }
                },
                {
                    from: path.join(__dirname, "public/index.html"),
                    to: "./",
                    transform(content) {
                        return content
                            .toString()
                            .replace(/^.*redirectUri:.*$/gm, '            redirectUri: "https://d2806xo6wk8w8l.cloudfront.net"')
                            .replace("bundle.js", `bundle-${FILE_VERSION}.js`)
                    }
                }
            ]
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
}
