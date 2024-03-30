import mongoose from "mongoose";
import "dotenv/config";

const dbUser = process.env.USER_NAME;
const dbPassword = process.env.USER_PASSWORD;

const connect = async () => {
  try {
    mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@firstnosql.13dokgm.mongodb.net/?retryWrites=true&w=majority&appName=firstnosql`
    );
    console.log("Mongo DB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connect;
