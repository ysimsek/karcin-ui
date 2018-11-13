const appRoot = require("app-root-path");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const FileChanger = require("webpack-file-changer");
const package = require("./package.json");
const build = process.argv.indexOf("-p") !== -1;
const paths = {
    root: appRoot.path,
    app: path.join(appRoot.path,"/showcase"),
    build: path.join(appRoot.path,"/docs"),
    lib: path.join(appRoot.path,"/src"),
    node_modules: path.join(appRoot.path,"/node_modules")
};
const webpackConf = {
    stats: {
        errors: false,
        warnings: false
    },
    context: paths.app,
    entry: "./index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/docs"
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
                /**
                 * @link https://github.com/webpack/file-loader
                 * npm install file-loader --save-dev
                 */
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: "file-loader",
                include: /fonts/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                /**
                 * @link https://github.com/webpack/json-loader
                 * npm install json-loader --save-dev
                 */
                test: /\.(txt)(\?\S*)?$/,
                use: "raw-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: require.resolve('style-loader'),
                    },
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            url:false,
                            minimize:true,
                            sourceMap:true
                        }
                    },
                    {
                        loader: require.resolve('sass-loader'),
                    }
                ]
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

if (build){
    webpackConf.output.filename = "bundle.[hash].js";
    webpackConf.plugins.push(new FileChanger({
        move: [{
            from: path.join(appRoot.path, "assets"),
            to: path.join(appRoot.path, "docs")
        }
        ],
        change: [{
            file: "./index.html",
            parameters: {
                "bundle\\.js": "bundle.[hash].js",
                "\\$VERSION": package.version,
                "\\$BUILDDATE": new Date(),
            }
        }
        ]
    }));
}

module.exports = webpackConf;
