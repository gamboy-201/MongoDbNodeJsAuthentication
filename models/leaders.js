let mongoose = require('mongoose');
let schema = mongoose.Schema;
const leaderSchema = new schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        required: true
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
let Leaders = mongoose.model("leader",leaderSchema);
module.exports = Leaders;