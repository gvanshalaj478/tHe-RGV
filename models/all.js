const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin_gvanshalaj:Sunday_1998@cluster0.yhptq.mongodb.net/Bank", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("sucess0");
    })
    .catch((err) => {
        console.log("error", err);
    })

const databSchema = new mongoose.Schema({
    Date: Date,
    payment: String
});

const Datab = mongoose.model("Datab", databSchema);

module.exports = Datab;
