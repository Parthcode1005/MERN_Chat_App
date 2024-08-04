const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    console.log('Mongo URI:', process.env.MONGO_URI); // Debugging line
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Deprecated options removed
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    console.error(error); // Log more details
    process.exit(1); // Use 1 to indicate an error occurred
  }
};

module.exports = connectDB;
