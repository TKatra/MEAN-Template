'use strict';

var NerdController = require('./modules/nerds/controllers/nerdController');

module.exports = function(app) {
  app.get('/api/nerds', NerdController.get);
  app.post('/api/nerds', NerdController.put);
  app.post('/api/nerds/:id', NerdController.update);
  app.delete('/api/nerds/:id', NerdController.delete);

  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });
};