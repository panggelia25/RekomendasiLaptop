import express from "express"
import dotenv from "dotenv"

dotenv.config();

const server = express();
server.use(express.static("web/"));

server.listen(process.env.PORT,function(){
    console.log(`server running on port ${process.env.PORT}`);
});