const fs=require('fs');
const http=require('http');
// fs.writeFile("hey.txt","hey hello kaise ho",function(err){
//     if(err)console.error("err");
//     else console.log("done");
// })
// fs.appendFile('hey.txt',"mai to acha hu",function(err){
//     if(err)console.error("err");
//     else console.log("done");
// })
// fs.rename("hey.txt","hii.txt",function(err){
//     if(err)console.error("err");
//     else console.log("done");
// })
// fs.copyFile("hii.txt","./copy/copy.txt",function(err){
//     if(err)console.error(err);
//     else console.log("done");
// })
// fs.unlink("hii.txt",function(err){
//     if(err)console.error(err);
//     else console.log("deleted");
// })
const server=http.createServer(function(req,res){
    res.end("hello world");
})
server.listen(3000);