const express = require('express')
const app = express()

//app.get('/', (req, res) => res.send('Hello World! I\'m express!!'))

// 정규식
app.get('/ab?cd', function(req, res){
    // 물음표는 0번 또는 1번 발생
    // acd or abcd ...
    res.send('ab?cd');
});

app.get('/ab+cd', function(req, res){
    // 덧셈은 1번 이상 발생
    // abcd or abbcd or abbbcd ...
    res.send('ab+cd');
});

app.get('/ab*cd', function(req, res){
    // 별표는 0번 이상 발생
    // abcd, abxcd, abRABDOMcd, ab123cd...
    res.send('ab*cd');
});

app.get('/ab(cd)?e', function(req, res){
    // abe, abcde ...
    res.send('ab(cd)?e');
});

// 다음의 라우트 경로는 butterfly 및 dragonfly와 일치하지만, butterflyman 및 dragonfly man 등과 일치하지 않습니다.
app.get(/.*fly$/, function(req, res) {
    res.send('/.*fly$/');
});

app.listen(3000, () => console.log('express app is listening on port 3000...'))
