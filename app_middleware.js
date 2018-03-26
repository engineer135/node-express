//Express는 자체적인 최소한의 기능을 갖춘 라우팅 및 미들웨어 웹 프레임워크이며, Express 애플리케이션은 기본적으로 일련의 미들웨어 함수 호출입니다.

var express = require('express');
var app = express();

var myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
};

var myLogger2 = function (req, res, next) {
    console.log('LOGGED2');
    next();
};

// 위에 오는 미들웨어 함수가 먼저 실행된다.
// 이 경우 myLogger > myLogger2 > get 순서로 실행됨.
app.use(myLogger);
app.use(myLogger2);

// requestTime 미들웨어
var requestTime = function(req, res, next){
    console.log('requestTime fn...');
    req.requestTime = Date.now();
    next();
};

var requestTime2 = function(req, res, next){
    console.log('requestTime2 fn...');
    req.requestTime = req.requestTime + '!!! yoo hoo !!!';
    next();
};

app.use(requestTime);
app.use(requestTime2);

// 라우팅은 use 다 하고 마지막에 해줘야 한다. 중간에 하면 에러남..
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/requestTime', function (req, res) {
    var responseText = 'Hello World!';
    responseText += 'Requested at: ' + req.requestTime + '';
    res.send(responseText);
});
  
app.listen(3000);