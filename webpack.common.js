const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve("./src/index.js"),
  plugins: [
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  output: {
    path: path.resolve("./dist/"),
    filename: "index.js",
    library: "di-web",
    libraryTarget: "umd",
  },
  externals: {      
    "react": { commonjs: "react", commonjs2: "react" }
  } 
};
