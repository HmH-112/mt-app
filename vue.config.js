module.exports = {
    devServer: {
        proxy: {
            '/api/meituan/header/searchHotWords.json': {
                target: 'http://open.duyiedu.com'
            }
        }
    },
    publicPath: './',
}