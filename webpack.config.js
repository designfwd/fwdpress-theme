/**
 * Webpack configuration, with support for CSS/SCSS, JS(X)/TS(X)
 */

const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

/**
 * Set up entry points
 */
const entryPoints = function () {
    let entries = new Object();

    values.forEach(function (value) {
        let key = value.replace(/^.*[\\\/]/, "").split(".")[0];
        entries[key] = value;
    });

    return entries;
};

module.exports = {
    entry: entryPoints(),
    output: {
        filename: "[file]",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [new ESLintPlugin(), new MiniCssExtractPlugin()],
    watchOptions: {
        ignored: "**/node_modules",
    },
};
