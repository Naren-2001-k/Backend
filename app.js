// Express
const express = require("express");
const app = express();
const db = require("./demo/src/database/db");
const userRouter=require("./demo/src/router/userRouter")
const productRoute=require("./demo/src/router/productRouter")
const bodyParser=require("body-parser")
app.use(bodyParser.json())
app.use("/user",userRouter)
app.use("/product", productRoute);


db.on("open", () => {
  app.listen(3000, () => {
    console.log("Port is running in 3000");
  });
});
db.on("error", () => {
  console.log("Database is not connected");
});
// Server Creation
// const http=require("http");
// http.createServer(function(req,res){
//     res.write("Server is successfully created")
//     res.end()

// }).listen(3000)

// // OS Module
// const os=require('os')
// console.log(os.hostname(),"Hostname")
// console.log(os.type(),"Type")

// Make Dir
// const fs=require("fs")
// fs.mkdir('demo',(err)=>{
//     if(err){
//         console.log("Error",err)
//     }else{
//         console.log("Create Successfully")
//     }
// })

// Remove Dir
// fs.rmdir('demo1',(err)=>{
//     if(err){
//         console.log("Error",err)
//     }else{
//         console.log("Remove file Successfully")
//     }
// })

// Write File
// const folderPath = './demo';
// const fileName = 'example.txt';
// const newfileName = 'fileSystem.txt';
// const content='Hi Narendhiran'
// fs.writeFile(`${folderPath}/${fileName}`,content,(err)=>{
//     if(err){
//         console.log("File is not created")
//     }else{
//         console.log("File is created successfully")
//     }
// })

// Append File
// fs.appendFile(`${folderPath}/${fileName}`,"Welcome",(err)=>{
//     if(err){
//         console.log("File is not update successfully")
//     }else{
//         console.log("File is update successfully")
//     }
// })

// // Readfile
// fs.readFile(`${folderPath}/${fileName}`,(err,data)=>{
//     if(err){
//         console.log("File is not created successfully",err)
//     }else{
//         console.log(data.toString(),"Data Read Successfully")
//     }
// })

// Unlink (delete file)
// fs.unlink("myFile.txt",(err)=>{
//     if(err){
//         console.log("File is already deleted")
//     }else{
//         console.log("File is deleted successfully")
//     }
// })

// // Rename File
// fs.rename(`${folderPath}/${fileName}`, `${folderPath}/${newfileName}`,(err)=>{
//     if(err){
//         console.log("File is not read",err)
//     }else{
//         console.log("File rename successfully")
//     }
// })
