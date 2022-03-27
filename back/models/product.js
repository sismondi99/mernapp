const mongoose = require ('mongoose')

const prod = mongoose.Schema({
    name: {
        type : String,
        require : true
    }, 
    description: {
        type : String,
        require : true
    },
    price: {
        type : Number,
        require : true
    }
});

module.exports = mongoose.model('Product', prod);