const http=require("http");
http.createServer(function(req,res){
    res.write("Server is created successfully")
    res.end()

}).listen(3000)