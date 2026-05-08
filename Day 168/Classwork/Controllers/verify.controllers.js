export const verify = async (req, res) => {
    try {
        const { token } = req.params;

        const user = await Users.findOne({ verificationCode: token });

        if (!user) {
        return res.status(404).json({
            status: "fail",
            message: "ვერიფიკაციის ბმული არასწორია",
        });
        }

        user.isVerified = true;
        user.verificationCode = undefined;

        await user.save();

        res.status(200).json({
        status: "success",
        message: "თქვენი ანგარიში წარმატებით გააქტიურდა!",
        });
    } catch (error) {
        res.status(500).json({
        status: "error",
        message: error.message,
        });
    }
};