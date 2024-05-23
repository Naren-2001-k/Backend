const mongoose=require("mongoose")
mongoose.connect('mongodb+srv://knaren2001:f3QglkVUdqBRHTJL@cluster0.w3bpmam.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('MongoDB Connected')
})
.catch((error)=>{
    console.log('MongoDB is not connected',error)
})

module.exports=mongoose.connection;