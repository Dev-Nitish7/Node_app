const express = require('express');
const router = express.Router();
const { getAllUsers, getAddForm, addUser, editUser, updatedUser } = require('../controllers/userController');

// GET:  get  all users
router.get('/', getAllUsers);

// GET: add form
router.get('/add',getAddForm);

// POST: Add a new user 
router.post('/add', addUser);

// GET: edit form 
router.get('/edit/:id', editUser );

// PUT: Update
router.put('/:id',updatedUser );

module.exports = router;
