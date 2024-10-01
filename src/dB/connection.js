const mongoose = require('mongoose')


const options = {
    useNewUrlParser :true,
    useUnifiedTopology:true
};

async function connection() {
    try{
        await mongoose.connect(process.env.DB_URL,options)
        console.log("CONNECTED")
    }catch(err) {
        console.log("ERROR")
        throw err
    }
}

module.exports = connection