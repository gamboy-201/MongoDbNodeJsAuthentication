let mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
let Currency = mongoose.Types.Currency;
let schema = mongoose.Schema;
const promoSchema = new schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
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
    description: {
        type: String,
        default: ''
    }
},
{
    timestamps: true
});
let Promotions = mongoose.model("promotion",promoSchema);
module.exports = Promotions;