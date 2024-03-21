const path = require("path"),
    moment = require("moment"),
    PACKAGE = require("./package.json")

/**
 * Common webpack configuration for development and production
 */
module.exports = {
    mode: "none",
    context: path.join(__dirname),
    entry: "./src/Index.tsx",
    module: {
        rules: [
            {
                test: /AppConfig\.ts$/,
                loader: "string-replace-loader",
                options: {
                    search: "__APPCONFIG_DATE__",
                    replace: moment().format("YYYY-MM-DD")
                }
            },
            {
                test: /AppConfig\.ts$/,
                loader: "string-replace-loader",
                options: {
                    search: "__APPCONFIG_VERSION__",
                    replace: PACKAGE.version
                }
            },
            {
                test: /\.(mjs|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-react", "@babel/preset-typescript"],
                            plugins: [
                                "@babel/plugin-syntax-dynamic-import",
                                "@babel/plugin-proposal-function-bind",
                                "@babel/plugin-proposal-object-rest-spread",
                                "@babel/plugin-proposal-export-default-from",
                                ["@babel/plugin-proposal-decorators", { legacy: true }],
                                ["@babel/plugin-proposal-class-properties", { loose: true }]
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
            "@app": path.resolve("./src")
        },
        fallback: {
            buffer: require.resolve("buffer"),
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify"),
            "process/browser": require.resolve("process/browser")
        }
    },
    output: {
        path: path.join(__dirname, "../public"),
        filename: "bundle.js",
        chunkFilename: "bundle.[id].js"
    }
}
