const { User } = require('../Models/User');
const { createHmac, randomBytes } = require('crypto');

// Signup function
const handleSignUp = async (req, res) => {
    try {
        const { name, password, email, role } = req.body;

        // Check if required fields are provided
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Missing Credentials!",
                success: false
            });
        }

        // Check if the user already exists
        const user = await User.findOne({ email });

        if (user) {
            return res.status(409).json({
                message: "User Already Exists!",
                success: false
            });
        }

        // Generate salt and hash password
        const salt = randomBytes(16).toString('hex');
        const hashPass = createHmac('sha256', salt).update(password).digest("hex");

        // Create a new user
        await User.create({
            name, email, password: hashPass, salt, role
        });

        // Return success response for user creation
        return res.status(201).json({
            message: "User Created Successfully",
            success: true
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};

//..................................................................................

const handleSignIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "Invalid Credentials",
                success: false
            });
        }

        // Compare the hashed password
        const salt = user.salt;
        const hashPass = user.password;
        const newHash = createHmac('sha256', salt).update(password).digest("hex");

        if (newHash !== hashPass) {
            return res.status(401).json({
                message: "Invalid Credentials",
                success: false
            });
        }

        // If the user is an Admin, return all users' data
        if (user.role === 'ADMIN') {
            const AllUsers = await User.find({}, { name: 1, email: 1, role: 1 });

            return res.status(200).json({
                message: "All users list for Admin",
                success: true,
                data: AllUsers
            });
        }

     
        return res.status(200).json({
            message: "Login Successful",
            success: true
        });

    } catch (error) {
        console.log(error);

        
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};


module.exports = { handleSignIn, handleSignUp };
