const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './index.html',
        './src/**/*.jsx',
        './src/**/*.tsx',
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
    plugins: [
        purgecss,
    ],
};
