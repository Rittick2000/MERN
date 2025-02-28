const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log("connecting...")
    await mongoose.connect(
      "mongodb+srv://RittickTest:Test123@cluster0.du37l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
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
