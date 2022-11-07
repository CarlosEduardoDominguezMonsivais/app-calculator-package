const mongoose = require('mongoose');

const dbConnect = () => {
    const MONGODB_URI = process.env.MONGODB_URI
    mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('conected to mongoDB'))
    .catch((error) => console.log(error))
}

module.exports = dbConnect