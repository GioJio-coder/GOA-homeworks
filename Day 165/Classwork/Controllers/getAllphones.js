const { json } = require("express");
const Phones = require(`../Models/phones.models`);
const { default: AppError } = require("../Utils/AppError");

const getAllPhones = async (req, res) => {
    try {
        const phones = await Phones.find();

        if (result.length === 0) {
            return next(new AppError("No phones were found", 404))
        }

        res.status(200).json({
            status: 'succes',
            results: phones.length,
            data: {
                phones
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
};
module.exports = getAllPhones;