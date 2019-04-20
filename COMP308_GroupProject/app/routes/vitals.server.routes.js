const users = require('../controllers/user.server.controller');
const vitalSigns = require('../../app/controllers/vitals.server.controller');
//
module.exports = function (app) {
    app.route('/api/vitals').post(users.requiresLogin, vitalSigns.create);
    app.route('/api/vitals/:patientId').get(users.requiresLogin, vitalSigns.list)
};
