const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = {
    module: {
        plugins: [
            new VuetifyLoaderPlugin()
        ],
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ],

    }
}