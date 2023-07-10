---
layout: post
title: React
tags: [React, Developer, Front-end]
categories: React.js
---

1. docker container 다운로드
2. docker cmd를 통해 image 생성
3. docker 외부 연결
   1. (나는 해당사항 없었음) docker.conf 변경 (vi 사용)
      1. 만약 vi가 docker 내에 설치가 안되있을경우 아래의 두 cmd 실행
          apt-get update
          apt-get install vim
       2. docker ip address 확인
          1. docker inspect {container_id} | grep IP
    2. 도커의 5432port 방화벽 열기 (난 이미 열려있었음. docker desktop에서 해당 이미지의 inspect에 port에 적힌 ip대로 실행)

** 참고: VSCode 에도 postgresql과 연결할 수 있는 플러그인이 있음. 이번에 이거 사용해봄
    https://055055.tistory.com/39