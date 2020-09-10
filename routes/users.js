const express = require('express');
const router = express.Router();
const User = require('../models/UserModel');
const users = [];

/* GET users listing. */
router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    // console.log(req.body);
    const user = {
        ...req.body
    };

    users.push(user);

    User.forge(user).save().then(() => {
        res.send(user);
    });



    /* ###########  ###########  ###########  ########### */
    /*const created_at = moment().add(3, 'hours').toDate();
    const time = {
        ...req.body,
        created_at
    };
    users.push(time);
    User.forge().save(time).then((model) => {
        res.send(model);
    });*/
    /* ###########  ###########  ###########  ########### */
});

module.exports = router;
