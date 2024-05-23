const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SAMPLE_USER_DATA = require('../data/sampleUser');

const usersFilePath = path.join(__dirname, '../data/users.json');

const register = (req, res) => {
    const { email, password } = req.body;

    fs.exists(usersFilePath, (exists) => {
        if (!exists) {
            fs.writeFile(usersFilePath, '[]', (err) => {
                if (err) {
                    console.error('Error creating users.json file:', err);
                    return res.status(500).send({ message: 'Internal server error' });
                }
                console.log('users.json file created');
                addUser(email, password, res);
            });
        } else {
            addUser(email, password, res);
        }
    });
};

const addUser = (email, password, res) => {
    fs.readFile(usersFilePath, (err, data) => {
        if (err) {
            console.error('Error reading users.json file:', err);
            return res.status(500).send({ message: 'Internal server error' });
        }

        const users = JSON.parse(data);
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            return res.status(400).send({ message: 'User already exists' });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = { id: users.length + 1, email, password: hashedPassword, ...SAMPLE_USER_DATA };

        users.push(newUser);

        fs.writeFile(usersFilePath, JSON.stringify(users), (err) => {
            if (err) {
                console.error('Error writing to users.json file:', err);
                return res.status(500).send({ message: 'Internal server error' });
            }

            const token = jwt.sign({ id: newUser.id, email: newUser.email }, process.env.JWT_SECRET, {
                expiresIn: '1h',
            });
            res.status(200).send({ message: 'User registered successfully' ,token});
        });
    });
};

module.exports = {
    register,
};
