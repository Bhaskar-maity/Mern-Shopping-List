//json

const express = require('express');
const router = express.Router();

//item model
const Item = require('../../models/Item');

// @route   get api/items
// @desc    get all items
// @acces   public

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1})
        .then(items => res.json(items))
});

// @route   post api/items
// @desc    create a post
// @acces   public

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save()
        .then(item => res.json(item));
});

// @route   delete api/items/:id
// @desc    delete a post
// @acces   public

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});


module.exports = router;