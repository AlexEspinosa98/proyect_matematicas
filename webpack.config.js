const path = require('path');


module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output:{
        filename: "index.js",
        path: path.resolve(__dirname, "public"),
    },

    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                options :{
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }]
        }]
    }


};
