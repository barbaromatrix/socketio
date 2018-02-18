module.exports = function(_) {
    return {
        setRouting: function(router) {
            router.get('/', this.indexPage);
            router.get('/signup', this.getSignUp);
        },

        indexPage: function(req, res) {
            return res.render('index');
        },

        getSignUp: function(req, res) {
            return res.render('signup');
        }
    };
};
