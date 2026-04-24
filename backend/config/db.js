const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    // useNewUrlParser + useUnifiedTopology: silence driver deprecations (mongoose 5)
    // dbName: set MONGO_DB_NAME in .env if your URI has no /dbname (defaults to "test")
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    if (process.env.MONGO_DB_NAME) {
      options.dbName = process.env.MONGO_DB_NAME;
    }

    const conn = await mongoose.connect(process.env.MONGO_URI, options);

    if (conn.connection.name === "test" && !process.env.MONGO_DB_NAME) {
      console.warn(
        'MongoDB is using the default database "test". Add MONGO_DB_NAME=your_db to .env or put /your_db in MONGO_URI.'
          .yellow,
      );
    }

    console.log(
      `MongoDB Connected: ${conn.connection.host} (db: ${conn.connection.name})`
        .cyan.underline,
    );
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    console.error(error); // Log more details
    process.exit(1); // Use 1 to indicate an error occurred
  }
};

module.exports = connectDB;
