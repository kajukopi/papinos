// routes/itemRoutes.js
const express = require('express');
const ItemController = require('../controllers/itemController');

const router = express.Router();

router.post('/items', ItemController.create);
router.get('/items', ItemController.getAll);
router.get('/items/:id', ItemController.getById);
router.put('/items/:id', ItemController.update);
router.delete('/items/:id', ItemController.delete);

module.exports = router;
