const path = require('path');

module.exports = {
    module: {
        loaders: [
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url?limit=8192'},
            {test: /\.css?$/, loaders: ['css'], include: path.resolve(__dirname, '../')}
        ]
    }
}