var express = require('express');
var router = express.Router();

// 이 라우터에서 사용할 미들웨어
router.use(function timeLog(req, res, next){
    console.log('Time: ', Date.now());
    next();
});
// 홈페이지 라우트 정의
router.get('/', function(req,res){
    res.send('Birds home page!');
});
// about 라우트 정의
router.get('/about', function(req,res){
    res.send('About birds!');
});

module.exports = router;