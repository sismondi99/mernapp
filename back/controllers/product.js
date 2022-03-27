const Product = require('../models/product');

exports.createProduct = (req, res) => {
    const prod = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });

    prod.save()
    .then((product) => {
        return res.status(201).json({product})
    })
    .catch((error) => { return res.status(400).json({error}) });
}