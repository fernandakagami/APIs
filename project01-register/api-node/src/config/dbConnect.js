import mongoose from "mongoose";

mongoose.connect("mongodb+srv://fernandakagami:TVR9Top08qXiLUMt@cluster0.vqkkgsx.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;

