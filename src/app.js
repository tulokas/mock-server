const express = require("express");

const app = express();

var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error(err);
        return res.status(400).send({ status: 404, message: err.message }); // Bad request
    }
    next();
});

app.post('/signin', (req, res) => {
    try {
        const {email, password, keepLoggedIn} = req.body;
        if (email && password) {
            res.send({
                "email": email,
                "keepLoggedIn": keepLoggedIn,
                "status": 200,
            });
        } else {
            res.send('Invalid data');
        }    
    } catch (err) {
        debug.log('Error: ', err);
        res.send({
            "Error": "Error occurred while parsing request!",
        });
    }
});

app.listen(5100, () => {
    console.log('Server is up on port 5100.');
});