const express = require('express')
const app = express()

app.get('/example/a', function (req, res) {
    res.send('Hello from A!');
});

// 2개 이상의 콜백함수 사용할 경우.. 오호..!?
app.get('/example/b', function (req, res, next) {
    console.log('the response will be sent by the next function ...');
    next();
}, function (req, res) {
    res.send('Hello from B!');
});


// 콜백함수 배열로 사용 가능
var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
}
var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
}
var cb2 = function (req, res) {
    res.send('Hello from C!');
}
app.get('/example/c', [cb0, cb1, cb2]);


// 이렇게도 되는데... 이런식으로 쓸일이 있음!? CB0 > CB1 > the response.. > Hello.. 순으로 실행됨
var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
}  
var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
}  
app.get('/example/d', [cb0, cb1], function (req, res, next) {
    console.log('the response will be sent by the next function ...');
    next();
}, function (req, res) {
    res.send('Hello from D!');
});

// 라우트. 이 기능이 쏠쏠할듯. 체인 가능한 라우트 핸들러 작성. 중복, 오타 감소!
app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });


app.listen(3000, () => console.log('express app_route is listening on port 3000...'))