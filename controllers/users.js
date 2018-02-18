module.exports = function(_) {
    return {
        setRouting: function(router) {
            router.get('/', this.indexPage)
        },

        indexPage: function(req, res) {
            console.log('oasdkasodksaok')
            return res.render('index', {
                test: 'This is a test'
            })
        }
    };
};
