import express from "express";
import "dotenv/config.js";
import cors from "cors";
import connectDB from "./config/db.js";
 
const app = express();

//middleware
app.use(express.json());
app.use(cors());

// test route
app.get("/api/health",(req,res)=>{
    res.json({status:"ok", message:"Server is running", time:new Date()});
});

const PORT = process.env.PORT || 5000;

//connect to database
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error)=>{
    console.error("Failed to connect to the database: ", error.message);
    process.exit(1);
})