const appRoot = require("app-root-path");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const paths = {
    root: appRoot.path,
    app: path.join(appRoot.path,"/showcase"),
    build: path.join(appRoot.path,"/build"),
    lib: path.join(appRoot.path,"/src"),
    node_modules: path.join(appRoot.path,"/node_modules")
};
const webpackConf = {
    context: paths.app,
    entry: "./index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    cache:true,
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias:{
            "karcin-ui/lib": paths.lib,
            "karcin-ui": paths.lib + "/index"
        },
        modules: [paths.app, paths.node_modules, paths.lib]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins:[
        new CopyWebpackPlugin([
            {
                from: "../assets"
            }
        ])
    ]
};
module.exports = webpackConf;