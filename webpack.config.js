const path = require('path');

module.exports = {
    entry: './src/index.js', // Adjust if the entry point is different
    output: {
        filename: 'fretboard.min.js',
        path: path.resolve(__dirname, 'output'),
        library: 'Fretboard',
        libraryTarget: 'umd',
    },
    mode: 'production',
};
