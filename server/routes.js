var controller = require('./controller/index');
var router = require('express').Router();

router.get('/:name', controller.get);
router.post('/:name', controller.post);
router.put('/:name', controller.put);
router.delete('/:name', controller.delete);
router.post('/user', controller.postUser);

module.exports = router;