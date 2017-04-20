var controller = require('./controller/index');
var router = require('express').Router();

router.get('/budget', controller.get);
router.post('/budget', controller.post);
router.put('/budget', controller.put);
router.delete('/budget', controller.delete);

module.exports = router;