const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    publicPath: "/",
    historyApiFallback: {
      rewrites: [{ from: /.\/bundle.js$/, to: "/bundle.js" }],
    },
    proxy: [
      {
        context: ["/contak/graphql", "/static/graphene_django"],
        target: "http://localhost:8000",
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/i,
        include: [path.resolve(__dirname, "src"), path.resolve(__dirname, "node_modules")],
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
