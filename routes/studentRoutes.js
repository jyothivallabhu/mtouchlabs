const express = require('express');
const router = express.Router();
const {getStudents, getStudentsById} = require('../controllers/studentController');
  
const auth = require('../middlewares/authMiddleware')
const {validateStudent} = require('../middlewares/inputValidator');

router.get('/', getStudents);
router.get('/:id', getStudentsById);


module.exports = router;