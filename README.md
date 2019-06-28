> 이 예제는 Github pages를 이용해 React app을 호스팅 하는 샘플입니다.
> 아래 github 사이트를 참고하여 생산 되었습니다.
__https://github.com/gitname/react-gh-pages__


## github pages에 hosting 하는 핵심은
1. github에 project를 생성
2. http://{username}.github.io/{repo-name} 으로 page에 접근 가능 (index.html이 없으므로 아직 404 error )
3. CRA를 통해 React App 생성
4. gh-pages dependancy를 추가
``` command
$ npm install gh-pages --save-dev
```
5. package.json 에 ___homepage___ 주소 추가
``` json
"homepage": "http://yesnokim.github.io/react-gh-pages"
```
6. package.json 의 __script__에 아래 ___predeploy___, ___deploy property___ 추가
```json
"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
7. git repository 생성 및 Github repo를 remote로 local git repo에 연결
```shell
$ git init
$ git remote add origin https://github.com/yesnokim/react-gh-pages.git
```
8. deploy 수행
```shell
$ npm run deploy
```
9. 이제 http://yesnokim.github.io/react-gh-pages 접속 가능
10. (Optional) Source code를 master에 commit 후 Github origin에 push
```
$ git add .
$ git commit -m "Create a React app and publish it to GitHub Pages"
$ git push origin master
```
