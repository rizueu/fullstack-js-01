// Import models
const Users = require("../models/UserModel");

exports.getUsers = async (req, res) => {
  try {
    const dataUsers = await Users.findAll();
    res.status(200).json({
      status: 200,
      success: true,
      response: { dataUsers },
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      success: false,
      response: null,
      error: err.message,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const dataUser = await Users.findOne(id);
    res.status(200).json({
      status: 200,
      success: true,
      response: { dataUser: dataUser[0] },
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      success: false,
      response: null,
      error: err.message,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { nama, email, gender } = req.body;
    const response = await Users.create({ nama, email, gender });
    res.status(200).json({
      status: 200,
      success: true,
      response: "Data User berhasil ditambahkan!",
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      success: false,
      response: null,
      error: err.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { nama, email, gender } = req.body;
    const { id } = req.params;
    const response = await Users.update(id, req.body);
    res.status(200).json({
      status: 200,
      success: true,
      response: `Data User dengan id ${id} berhasil diubah!`,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      success: false,
      response: null,
      error: err.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Users.destroy(id);
    res.status(200).json({
      status: 200,
      success: true,
      response: `Data user dengan ID ${id} berhasil dihapus!`,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      success: false,
      response: null,
      error: err.message,
    });
  }
};
