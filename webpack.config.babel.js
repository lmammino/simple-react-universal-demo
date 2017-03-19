import path from 'path';

const config = {
  devtool: 'source-map',
  entry: {
    js: './src/app-client.js',
  },
  output: {
    path: path.join(__dirname, 'assets', 'js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          // options: 'cacheDirectory=.babel_cache',
        },
      },
    ],
  },
  plugins: [],
};

export default config;
