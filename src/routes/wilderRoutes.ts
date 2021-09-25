const router = require('express').Router();

const WilderControl = require('../controllers/WilderController');

router.post('/create', WilderControl.create);
router.get('/retrieve/:id', WilderControl.retrieve);
router.put('/update/:id', WilderControl.update);
router.delete('/delete/:id', WilderControl.delete);

module.exports = router;
