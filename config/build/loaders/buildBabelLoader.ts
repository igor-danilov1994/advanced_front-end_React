export const buildBabelLoader = () => ({
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: [
                [
                    'i18next-extract',
                    { locales: ['ru', 'en'], keyAsDefaultValue: true },
                ],
            ],
        },
    },
});
