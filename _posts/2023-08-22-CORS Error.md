---
layout: post
title: Cross-origin Request Error
tags: [React, Developer, Front-end]
categories: React.js
---

### 상황


### CORS란?
CORS는 Cross Origin Resource Sharing의 약자로, 서로 다른 도메인간에 자원을 공유하는 것을 의미하며, 이것은 기본적으로 브라우저에서 차단되어있다.

### 도메인이란?
원래 webpage address는 ip주소로 구성되어있는데,
ip주소를 사람들이 기억하기 쉽게 도메인 네임을 사용해서 변경한다.
- opentutorials.org -> 115.68.24.88
- naver.com -> 220.95.233.172
- daum.net -> 114.108.157.19

### 왜 차단시키는가?
브라우저는 공격에 굉장히 취약해서, 이를 방지하기 위해서 현재 있는 도메인/포트와 다른 곳으로 요청을 보내는것을 원천적으로 막는다. 즉, 동일 서버에 있는 리소스는 자유롭게 가져올 수 있지만, 다른 출처 (Protocol+Host+port)에 있는 리소스는 가져올 수 없다.

### 해결책
서버에서 Access-Control-Allow-Origin 헤더에 허용할 출처를 기재해서 클라이언트에 응답하면 된다. 백엔드쪽에서 고쳐야 한다.


출처: https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F