export const signUp = async (req, res) => {
    try {
        const newUser = new Users(req.body);

        const token = newUser.createEmailVerificationToken();

        await newUser.save();

        const message = `რეგისტრაციის დასასრულებლად გამოიყენეთ კოდი: ${token}`;
        
        await sendEmail({
        email: newUser.email,
        subject: "ვერიფიკაცია",
        message
        });

        res.status(201).json({
        status: "success",
        message: "მომხმარებელი დარეგისტრირდა, კოდი გაიგზავნა იმეილზე."
        });

    } catch (error) {
        res.status(400).json({
        status: "fail",
        message: error.message
        });
    }
};