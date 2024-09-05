//u21669849, Qwinton Knocklein
const path = require("path");

module.exports = {
    entry: path.join(__dirname, "frontend/src/index.js"),
    output: {
        path: path.resolve(__dirname, "frontend/public"),
        filename: "bundle.js",
    },
    mode: "development",
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader",
            },
        },
        ],
    },
};
