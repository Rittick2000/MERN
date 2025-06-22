const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log("connecting...")
    const conn=await mongoose.connect(
      // `mongodb+srv://Rittick-VSCode:Rittick123@cluster0.du37l.mongodb.net/`,
       {
        useNewUrlParser: true, 
      }
    );
    console.log(`mongoDB Connected`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
