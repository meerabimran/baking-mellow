const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("✅ Connected Successfully");
    process.exit();
})
.catch(err => {
    console.log("❌ Failed");
    console.log(err);
});