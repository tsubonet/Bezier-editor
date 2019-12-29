const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: "development",
  entry: "./src/app.tsx",
  output: {
    path: outputPath,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  devServer: {
    contentBase: outputPath,
    open: false,
    port: 8081,
  }
}
