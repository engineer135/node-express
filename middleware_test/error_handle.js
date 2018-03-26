// 3. 오류 처리 미들웨어
// 항상 4개의 인수가 필요하다.
// 아래처럼 하면 에러 발생시 에러 처리 미들웨어 함수가 실행되긴 하는데...
// 정확한 사용법은 좀 더 공부해봐야할 것 같다.

var express = require('express');
var app = express();

app.use('/user/:id', function(req,res,next){
    console.log('first middleware');
    res.send('send 두번 호출해서 의도적으로 error를 만들어보자!');
    next();
});

app.get('/user/:id', function(req,res,next){
    console.log('router in...')
    res.send(req.params.id);
});

// 에러 핸들러는 가장 마지막에 와야 한다.
app.use(function(err,req,res,next){
    console.log('error handle middleware');
    console.log(req.xhr);
    console.error(err.stack);
    res.status(500).send('뭔가 잘못됐어유!');
});
  
app.listen(3000, () => console.log('error_level is listening on port 3000...'))