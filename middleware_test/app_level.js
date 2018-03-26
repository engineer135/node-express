// 1. 애플리케이션 레벨 미들웨어

var express = require('express');
var app = express();

// 마운트 경로 없는 미들웨어 함수. 모든 요청에 실행된다.
app.use(function (req, res, next){
    console.log('application level Time == ', Date.now());
    next();
});

// 마운트 경로 있는 미들웨어 함수. 해당 경로 요청시에만 실행된다.
app.use('/user1/:id', function(req, res, next){
    console.log('Request type == ', req.method);
    next();
});

// 라우트 및 해당 라우트의 핸들러 함수. :id 자리에 들어온 값을 화면에 표시..
app.get('/user1/:id', function(req, res, next){
    res.send('USER id == '+ req.params['id'])
});

app.get('/user2/:id', function (req, res, next) {
    console.log('ID:', req.params.id);
    next();
}, function (req, res, next) {
    console.log('next middleware');
    res.send('User Info');
    // next()가 없는 경우 여기까지만 호출되고, 아래 app.get은 호출되지 않는다.
    // next();
});
  
// handler for the /user/:id path, which prints the user ID
app.get('/user2/:id', function (req, res, next) {
    console.log('get handler');
    res.end(req.params.id);
});






// 라우터 미들웨어 스택의 나머지 미들웨어 함수들을 건너뛰려면 next('route')를 호출한다.
app.get('/user3/:id', function(req, res, next){
    // user Id가 0이면 라우트로 스킵
    if (req.params.id == 0) next('route');
    // 그게 아니면 다음 미들웨어 함수로 go
    else next();
},function(req, res, next){
    res.send('user id not zero');
});

app.get('/user3/:id', function(req, res, next){
    res.send('ok. id is zero!');
});

  
app.listen(3000, () => console.log('app_level is listening on port 3000...'))