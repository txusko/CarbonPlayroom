module.exports = {
  components: './carbon-import.js',
  outputPath: './dist/playroom',

  webpackConfig: () => ({
    module: {
      rules: [
        {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        },
        // {
        //   test: /\.css$/, use: [{loader: 'babel-loader'}],
        // },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }]
        },
        {
          test: /\.(ts|js|tsx|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    corejs: '2',
                    useBuiltIns: 'usage',
                    targets: {
                      browsers: 'IE 11'
                    }
                  }
                ],
                "@babel/preset-react",
                "@babel/preset-typescript"
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-syntax-dynamic-import'
              ]
            }
          }
        }
      ]
    }
  })
};
