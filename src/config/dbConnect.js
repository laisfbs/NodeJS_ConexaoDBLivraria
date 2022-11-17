import mongoose from "mongoose"

mongoose.connect("mongodb+srv://Lais:1234@node-express.dkjed.mongodb.net/Node-Express");

let db = mongoose.connection;

export default db;