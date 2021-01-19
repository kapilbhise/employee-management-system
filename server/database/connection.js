const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected...`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB

// mongodb+srv://admin-kapil:Kapil2408@cluster0.msrwt.mongodb.net/employeeDB?retryWrites=true&w=majority