const Phone = require('../Database/phones.json'); 

const deletePhone = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedPhone = await Phone.findByIdAndDelete(id);

        if (!deletedPhone) {
            return res.status(404).json({
                message: "Phone not found"
            });
        }

        res.status(204).send();

    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
};

module.exports = {
    deletePhone
};