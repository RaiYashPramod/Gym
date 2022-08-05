const mongoose = require('mongoose');

const loginUser = async (req, res) => {
    res.json ({mssg: 'login User'})
}

const signUser = async (req, res) => {
    res.json ({mssg: 'sign User'})
}

module.exports = ({ loginUser, signUser })