const mongoose = require ('mongoose');

const budgetSchema = new mongoose.Schema ({
    category: String,
    amount: Number
})

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;