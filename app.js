const http=require("http");
http.createServer(function(req,res){
    res.write("Server is successfully created")
    res.end()

}).listen(3000)