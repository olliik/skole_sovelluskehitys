const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');



generateToken = user => {
    return jwt.sign({
        algorithm: "RS256",
        expiresIn: "2h",
        iss: "leffaApp",
        sub: newUser._id,
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
    }, process.env.JWT_SECRET);
}

module.exports = {
    Register: async (req, res, next) => {
        const { username, password } = req.body;
        //console.log(req.body)
        if (await userModel.findOne({ username })) {
            return res.status(403).json( { error: 'Username already exists!'});
        }        
        const newUser = new userModel({
            username,
            password,
        });

        await newUser.save();

        res.status(200).json( { user: 'new user created' });
        //const token = generateToken(newUser);
        //res.status(200).json( { token });
    },

    Login: async (req, res, next) => {
        const { username, password } = req.body;
        console.log('server: ', req.body)
        const foundUser = await userModel.findOne( { username });
        if (foundUser) {
            if (password !== foundUser.password) {
                return res.status(403).json( { error: 'Wrong username or password!' });
            }
            req.session.user_id = foundUser._id;
            req.session.username = foundUser.username;
            req.session.save();
            console.log('req.session: ', req.session);
            return res.status(200).json(foundUser)
        }
        return res.status(400).json( {error: 'Wrong username or password!' });
    },

    Logout: async (req, res, next) => {
        req.session.destroy((err) => {
            if (err) return console.log(err);
        })
    },

    getUser: async (req, res, next) => {
        try {
            const user = await userModel.findById(req.params.userID)
            res.status(200).json(user);
        } catch (err) {
            res.json({ message: err })
        }
    },

    getAll: async (req, res, next) => {
        try {
            const users = await userModel.find();
            res.status(200).json(users);
        } catch (err) {
            res.json({ message: err })
        }
    },

    updateUserData: async (req, res, next) => {
        try {
            const userData = req.body;
            if( userData.avatar != '' && typeof req.file !== 'undefined' ) {
                userData.avatar = req.file.buffer;
            }
            await userModel.findByIdAndUpdate(req.params.userID, userData)
            return res.status(200).json({ message: "User data updated succesfully! "})
        } catch (err) {
            res.json({ error: err })
        }
    },
}