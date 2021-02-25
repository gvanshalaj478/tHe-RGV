const mongoose = require("mongoose");
const Customer = require("./models/user");

mongoose.connect("mongodb+srv://admin_gvanshalaj:Sunday_1998@cluster0.yhptq.mongodb.net/Bank", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("seccessful");
    })
    .catch((err) => {
        console.log("error", err);
    })

const v = async () => {
    await Customer.deleteMany({});
    await Customer.insertMany([{
        username: "Anshul sharma", email: "Anssh.123@gmail.com", Balance: 3000, contact: 1233444550
    }, {
        username: "Ramesh Kesarvani", email: "Raesh.vanigmail.com", Balance: 3000, contact: 7652400440
    }, {
        username: "john Bist", email: "ohnbi@gmail.com", Balance: 3000,  contact: 8866785412
    },
    {
        username: "Alexa", email: "axela478@gmail.com", Balance: 3000,  contact: 7781821923
    },
    {
        username: "Kanlley", email: "kanl_ly@gmail.com", Balance: 3000,contact: 7409291462
    },
    {
        username: "Rajesh Tawar", email: "Jesh_war2@gmail.com", Balance: 3000,  contact: 8273288921
    },
    {
        username: "Gautam Vanshalaj", email: "Vanshalaj478@gmail.com", Balance: 3000,  contact: 9675713485
    }]);
};

v();
