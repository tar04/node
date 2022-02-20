class errorController {
    renderError(req, res) {
        res.render('error');
    }
}

module.exports = new errorController();
