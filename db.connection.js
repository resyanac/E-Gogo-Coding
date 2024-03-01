const mongoose = require ('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect (`mongodb+srv://resyanac:Resyaa21@cluster21.guz7tco.mongodb.net/coding?retryWrites=true&w=majority` ,{
        useNewUrlParser : true,
        useUnifiedTopology: true
        });
        console.log('connected to database');
    } catch (error) {
        console.error('connection failed', error);
        process.exit(1);
    }
};

module.exports = connectDB