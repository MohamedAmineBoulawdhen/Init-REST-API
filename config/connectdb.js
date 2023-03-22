const mongoose = require("mongoose");

// const connect = async ()=>{
// try {
//     await mongoose.connect(process.env.URI)
//     console.log("Connected to database...");
// } catch (error) {
//     console.error("Error connecting to database");
// }
// }
mongoose.connect(process.env.URI, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

// module.exports= connect;