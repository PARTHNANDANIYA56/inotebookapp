const mongoose = require('mongoose');
uri = "parthnandaniya:parthnandaniya@cluster0.jdgo5sh.mongodb.net/cluster0?retryWrites=true&w=majority"
const connectDB = () => {
    console.log("hello mongooess")
    return mongoose.connect(uri, {
        userNewUrlParser: true,
        useunifiedTopology: true,
    });
};
module.exports = connectDB;
