## React-springboot book 프로젝트. 26강에서 작성함.
230213 복습.

useNavigate 사용법
https://basemenks.tistory.com/278
props.history.push('/') 안 되는 것을 위로 해결. 


Book밑에
book-backend와
book-frontend 모두 있음. githut에도 올려놈.
https://github.com/choryee/book-react-Choijuho


==== React-Springboot Book 프로젝트 ====
스프링부트
Springboot ^2.0
JPA
MySQL (H2)
Maven
Lombok

React 밑을 각각 설치해야.
yarn add react-router-dom
yarn add redux react-redux
yarn add react-bootstrap bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';

prettierrc
{
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}

AWS 배포하려면
root 접속 -> sudo passwd root -> su root 접속 apt update apt install git (설치 되어있음) apt install maven apt install docker.io apt install docker-compose

배포 명령
mvn compile
mvn clean package
docker-compose up --build -d (백그라운드 실행)
React와 Springboot 역방향 연결 link 걸기 (localhost로 같이 사용가능)
https://xiaolishen.medium.com/develop-in-docker-a-node-backend-and-a-react-front-end-talking-to-each-other-5c522156f634

도커 명령어
docker volume ls
docker volume prune
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker rmi $(docker images -aq)

--------------
//         <div class="container">
//         <div class="row">

//         <div class="col">
//             <div class="card" style="width: 18rem;">
//                 <img src="images/dang.jpg" height="150" width="150">
//                 <div class="card-body">
//                     <h5 class="card-title">전청당</h5>
//                     <p class="card-text">차곡차곡 쌓은 진심은 어떻게든 통한다는 것을 다양한 에피소드들을 통해 보여준다. </p>
//                     <a href="#" class="btn btn-primary">장바구니 넣기</a>
//                 </div>
//             </div>
//         </div>
//         </div>
//         </div>