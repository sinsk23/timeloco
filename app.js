require('dotenv').config();//.env 보안파일 환경변수 사용
const express = require('express');
const Router = require('./routes/index')
const app = express();
const http = require('http');
const fs = require('fs');
//ejs 경로위한 path
const path = require('path');

//ejs 세팅
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//app실행시 라우터 사용 경로
app.use('/', Router);

//html 사용시
// function send404Message(response){
//     response.writeHead(404,{"Content-Type":"text/platin"});
//     response.write("404 에러 ...");
//     response.end();

// }

// function onRequest(request,response){

//     if(request.method == 'GET' && request.url =='/'){
//         response.writeHead(200,{"Content-Type":"text/html"});
//         fs.createReadStream("./KakaoMapAPI.html").pipe(response);
//     }else{
//         send404Message(response);
//     }
// }

// http.createServer(onRequest).listen(3500);
http.createServer(app).listen(3500);
console.log("Server Created!!");