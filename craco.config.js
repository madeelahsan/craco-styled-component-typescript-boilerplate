/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires

module.exports = {
    webpack: {
        configure: config => {
            config.optimization = {
                runtimeChunk: {
                    name: 'manifest',
                },
                splitChunks: {
                    cacheGroups: {
                        common: {
                            test: /[\\/]src[\\/]pages[\\/]/,
                            chunks: 'all',
                            minSize: 0,
                        },
                    },
                },
            };
            return config;
        },
    },
    module: {
        rules: [
            {
                test: /\.(woff2|woff|eot|ttf|otf)$/,
                use: ['file-loader'],
            },
        ],
    },
    babel: {
        plugins: ['babel-plugin-styled-components'],
    },
    plugins: [],
};
