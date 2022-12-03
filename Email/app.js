const express = require('express');
const app =express();
const getcoderouter = require('./router/index')
const http = require('http');
const { response } = require('express');
const server = http.createServer();
const url = require("url")
server.on('request',(request,response)=>{
    var urlPath=url.parse(request.url, true);
    // console.log(urlPath.query);

    if(request.method==='GET' && urlPath.pathname ==='/test'){
        response.end('true');
        var Rdata=urlPath.query;
        // console.log(Rdata.email,Rdata.htmltext);
        getcoderouter.test(Rdata.email,Rdata.htmltext);
    }else{
        response.statusCode='404';
        response.end('404');
    }
})
//app.use('/',getcoderouter);
server.listen('2345',()=>{
    console.log("runing");
})