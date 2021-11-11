# 알뜰살뜰 가계부 - 한눈에 알아보는 가계부

<p align='center'>
<img width='200' alt='home' src='https://user-images.githubusercontent.com/59111836/141263274-e6633016-a258-4aea-b964-689d3eb27304.png'>
<img width='200' alt='home' src='https://user-images.githubusercontent.com/59111836/141261008-423d5226-aa1b-4992-9925-e27101b3084d.png'>
<img width='200' alt='home' src='https://user-images.githubusercontent.com/59111836/141263482-0d076556-c343-4373-95a0-85de847469d0.png'>
<img width='200' alt='home' src='https://user-images.githubusercontent.com/59111836/141263382-3fec8d71-696b-455b-b0ab-ec926aca37be.png'>
<img width='200' alt='home' src='https://user-images.githubusercontent.com/59111836/141263554-da84e2d5-98eb-4507-96d0-62f8ae6e89ca.png'>
<img width='200' alt='home' src='https://user-images.githubusercontent.com/59111836/141263632-f5f4739b-3d73-4113-9369-ab96aa450e4a.png'>
</p>
<h1>🛠 기술 스택</h1>
<p align='center'>
  <img src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square" />
  <img src="https://img.shields.io/badge/-React-%2361DAFB.svg?&logo=React&logoColor=white" />
  <img src="https://img.shields.io/badge/-Redux-%23764ABC.svg?&logo=Redux&logoColor=white" />
  <img src='https://img.shields.io/badge/yarn-yellow?logo=yarn'/>
  <img src='https://img.shields.io/badge/Axios-pink?'/>
  <img src='https://img.shields.io/badge/ReduxToolkit-764ABC?'/>
  <img src='https://img.shields.io/badge/StyledComponents-violet?logo=styled-components'/>
  <img src='https://img.shields.io/badge/ReactRouter-pink?logo=React Router'/>
  <img src="https://img.shields.io/badge/-JavaScript-%23F7DF1E.svg?&logo=JavaScript&logoColor=white" />
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/></a>
<img src='https://img.shields.io/badge/sequelize-blue?'/>
</p>
<br>
<h1>🥰 알뜰살뜰 가계부 소개</h1>
<h2>💵 태그를 등록하고 가계부를 작성해요!</h2>
<br>
<li>태그를 등록하고 가계부를 작성해보세요!</li>
<li>이번 달 가장 많은 지출을 한 태그와 금액을 알아볼 수 있어요!</li>
<br>
<h2>📈 이번 달 지출 추이를 한눈에 알아볼 수 있어요!</h2>
<li>이번 달 지출을 한눈에 알아볼 수 있어요!</li>
<br>
<h2>📆 내가 어떤 날 어떤 류의 지출을 했는지 알아봐요!</h2>
<li>어떤 류의 지출을 몇 번 했는지 달력에 기입되어 있습니다!</li>
<br>
<h1>트러블 슈팅</h1>
<h2>① 태그 선택이슈</h2>
<h3>문제</h3>
<li>태그가 한개일 때 첫 작성 페이지 로드시 태그가 선택되지 않는 문제가 생겼습니다.</li>
<br>
<h3>해결을 위한 시도</h3>
<li>태그를 선택하는 옵션을 임의로 하나 넣어 태그를 선택할 수 있게끔 조치하였습니다.</li>
<br>
<h3>결과</h3>
<li>태그 개수와 상관없이 정상적으로 태그를 선택할 수 있게 되었습니다.</li>
<br>
<h2>② 리액트 중복 에러</h2>
<h3>문제</h3>
<li>리액트 중복으로 인한 클라이언트 실행이 되지 않는 오류</li>
<br>
<h3>해결을 위한 시도</h3>
<li>React와 React DOM의 버전을 확인하였습니다.</li>
<li>잘못된 Hooks 호출이 있는지 확인해보았습니다.</li>
<li>npm ls react를 통해 중복된 react가 있는지 확인해보았습니다.</li>
<br>
<h3>결과</h3>
<li>서버 배포 중 리덕스가 상위 폴더에 설치된 것을 확인하고 상위 폴더에 설치된 리덕스를 삭제하여 정상적으로 클라이언트가 작동하게 되었습니다.</li>
