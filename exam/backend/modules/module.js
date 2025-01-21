const mongoose = require('mongoose')

const {Schema} = mongoose

const newschema = new Schema(
    {
        image : {type : String,require :true},
        title : {type : String,require :true},
        description : {type : String,require :true},
        price : {type : Number,require :true},
    }
)


const products = mongoose.model('products' , newschema)

module.exports = products