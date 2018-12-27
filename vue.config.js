module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? 'battling-page.louisehermosa.com' : '/',
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
