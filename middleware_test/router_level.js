// 2. 라우터 레벨 미들웨어
// express.Router() 인스턴스에 바인드된다는 점을 제외하면, 애플리케이션 레벨 미들웨어와
// 동일한 방식으로 작동한다.

var express = require('express');
var app = express();
var router = express.Router();

router.use(function (req, res, next){
    console.log('router level Time == ', Date.now());
    next();
});

router.get('/user3/:id', function(req, res, next){
    // user Id가 0이면 라우트로 스킵
    if (req.params.id == 0) next('route');
    // 그게 아니면 다음 미들웨어 함수로 go
    else next();
},function(req, res, next){
    res.send('user id not zero');
});

router.get('/user3/:id', function(req, res, next){
    res.send('ok. id is zero!');
});

// 라우터를 app에 마운트해줘야 한다!!!!
app.use('/', router);

app.listen(3000, () => console.log('router_level is listening on port 3000...'))

