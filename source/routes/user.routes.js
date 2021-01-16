const controller = require('../controller/user.controller');

module.exports = function(app) {
    app.post('/api/register', controller.register);

    app.get('/api/getAll', controller.getUser);
};