const express = require ('express')
const mongoose = require ('mongoose')
const cors = require ('cors')
const bodyParser = require('body-parser')
const dotenv = require ('dotenv')
const connectDB = require ('./db.connection')


dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message:'live coding'
    })
})



connectDB();

const db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error: '))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});


