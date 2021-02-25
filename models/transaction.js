const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin_gvanshalaj:Sunday_1998@cluster0.yhptq.mongodb.net/Bank", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("connected");
    })
    .catch((err) => {
        console.log("error", err);
    })

const transactionSchema = new mongoose.Schema({
    Date:Date,
    amount:Number,
    Description:String,
    comment:String
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
