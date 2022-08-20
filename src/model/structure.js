const mongoose = require("mongoose")
const Lists = new mongoose.Schema({
    groceryItem : {
        type : String,
        required: true
    },
    isPurchased : {
        type : Boolean,
        default : false
    }
})
const groceryList = new mongoose.model("groceryList",Lists)
module.exports = groceryList;