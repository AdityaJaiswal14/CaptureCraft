const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const authRouter = require("./routes/authRouter")
const multer = require("multer");
const { s3Uploadv2 } = require("./s3Service");
const cookieParser = require("cookie-parser")

connectDB();
app.use(cookieParser());
app.use(cors({ 
  origin: "http://localhost:5173", 
  credentials: true 
}));
app.use(bodyParser.json());
const storage = multer.memoryStorage();

app.use("/api/auth" , authRouter )
//single file upload
//const upload = multer({ dest: "uploads/" });
//app.post("/upload", upload.single("file"), (req, res) => {
//   res.json({ status: "success" });
// });
const upload = multer({
  storage,
  limits: { fileSize: 1000000000, files: 5 },
});
app.post("/upload", upload.array("file"), async (req, res) => {
   try {
     const results = await s3Uploadv2(req.files);
     console.log(results[0].Location);
     return res.json({ status: "success" , link:results[0].Location });
   } catch (err) {
     console.log(err);
   }
 });


mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(3000,()=>{
    console.log('Server Started')
  })
});