http://expressjs.com/ko/  
http://expressjs.com/  

express 공식 문서 보고 실습해본 소스입니다.  
번역본이 좀 구버전이라 번갈아보면서 진행했어요.  
파이썬하다 자바스크립트하니, 익숙해서 편하고 좋네요!  

# 첫걸음!
1. node를 설치한다  
2. 대상 폴더에서 npm init 으로 package.json 파일을 작성!  
3. Express 설치는 npm install express  
--save 옵션 주는 경우 package.json 파일 내의 dependencies 목록에 추가되고, 이후에는 npm install만 실행해도 종속항목 내의 모듈이 자동으로 설치됩니다. 좋네!  

# express generator 사용해서 신속한 골격 만들기  
1. npm install express-generator -g  
express command-line tool을 설치합니다.  

2. myapp 이라는 이름의 앱을 만들어보자. view 엔진은 pug(https://pugjs.org)로 설정한다.  
express --view=pug myapp  

3. dependencies 인스톨!  
cd myapp  
npm install  

4. app 실행!  
DEBUG=myapp:* & npm start  
windows에서는 앞에 set을 붙여줍니다!



