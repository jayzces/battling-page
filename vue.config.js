module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '' : '/',
    pages: {
        index: {
            entry: 'src/script.js',
            template: 'src/index.html',
            filename: 'index.html'
        }
    },
    devServer: {
        disableHostCheck: true
    }
}
