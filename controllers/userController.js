const User = require('../models/userModel');


const  getAllUsers=async (req, res) => {
  try {
    const users = await User.find();
    res.render('index', { users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const  getAddForm= (req, res) => {
  res.render('addUser');
}

const addUser=async (req, res) => {
  const { name, email, phone, city } = req.body;
  const newUser = new User({ name, email, phone, city });

  try {
    await newUser.save();
    res.redirect('/users'); // Redirect to user list after adding
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
}

const editUser=async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.render('editUser', { user });
  } catch (err) {
    res.status(404).json({ message: 'User not found' });
  }
}
const updatedUser=async (req, res) => {
  const { name, email, phone, city } = req.body;
  
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { name, email, phone, city }, { new: true });
    res.redirect('/users');
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
module.exports={
  getAllUsers,
  getAddForm,
  addUser,
  editUser,
  updatedUser
}