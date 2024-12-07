const config = {
  mode: 'production',
  entry: {
    index: './src/js/index.js',
    swiper: './src/js/swiper.js',
    // contacts: './src/js/contacts.js',
    // about: './src/js/about.js',
  },
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = config;
