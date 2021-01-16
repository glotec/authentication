const User = require('../models/user');

exports.register = (req, res) => {
    const user = new User({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        address: req.body.address
    });

    user.save((err, user) => {
        if(err) 
        {
            res.status(500).send({ message: err });
        }

        res.send({
            user: {
                id: user.id,
                fullname: user.fullname,
                email: user.email,
                address: user.address
            }
        });
    });
}

exports.getUser = (req, res) => {
    User.find()
    .then(data => {
        res.json(data);
    })
    .catch(err => res.json(err));
}