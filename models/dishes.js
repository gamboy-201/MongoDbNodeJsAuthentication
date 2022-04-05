let mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
let Currency = mongoose.Types.Currency;
let schema = mongoose.Schema;
let commentSchema = new schema({
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    comment: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});
const dishSchema = new schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    featured: {
        type: Boolean,
        default:false      
    },
    comments:[commentSchema]
},
{
    timestamps: true
});
let Dishes = mongoose.model("Dish",dishSchema);
module.exports = Dishes;