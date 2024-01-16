const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    hot: false,
    port: 8000,
    open: false,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: false,
        },
      },
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /custom\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /custom\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          "rtlcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "./assets/images/[name][ext]",
        },
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/i,
        type: "asset/resource",
        generator: {
          filename: "./assets/fonts/[name][ext]",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/style.css",
    }),
    new CssMinimizerPlugin(),
  ],
};
