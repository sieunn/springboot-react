import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserTable from './component/UserTable';
import UserForm from './component/UserForm';
import EditUserForm from './component/EditUserForm';



function App() {
  const [users, setUsers] = useState([]); //유저목록이 담길 빈 배열 생성

  //수정한 유저 정보를 잠시 담고있을 변수 생성
  const [UserToEdit, setUserToEdit] = useState(null);



  //useEffect는 버튼이나 특정 값을 클릭하지 않아도 자동실행이 됨 (딱 한번만 실행되느냐 아님 주기적으로 실행하느냐)
  //App.js가 실행되면 적용할 효과, 만약 특정 변수명이 없다면 기능이 최초 1회만 실행하고 실행되지 않음
  // useEffect(() => {기능},[         ]);
  //특정변수명이 존재한다면 특정변수명에 변화가 있을 때 마다 기능이 실행됨
  // useEffect(() => {기능},[특정변수명]);

 
  /* ************* useEffect 최초 1회실행 ************* */
  //useEffect(() => {
  //  모든유저보기(); //홈페이지 들어오면 최초 1회로 유저들이 보이고, 
  //}, [] ); //[] 비어있기 때문에 홈페이지가 보일때 딱 한번만 실행됨


 /* ************* useEffect에 user를 넣어서 유저목록에 변화가 발생하면 모도 불러오기 기능을 다시실행************* */
  useEffect(() => {
    모든유저보기(); //users = 유저목록에 유저가 추가되거나 삭제되는 이링 발생하면 모든 유저 다시보기가 됨
  }, [/*users*/] ); //[] users가 들어있기 때문에 유저 목록에 유저가 추가되거나 삭제될 경우 유저목록을 자동 새로고침
 

/*
  const 모든유저보기 = () => {
    //axois를 이용해서 모든 유저를 보겟다.라는 기능설정
    axios.get("/users") //Controller GetMapping에서 /user 라는 주소를 바라보기 때문에 users 적어준것
    // ****** 응답을 무사히 가져왔을 때 ****** //
    .then(응답 => { //Java에서 DB값에 있는 내용을 가져와 고객에게 가져온 내용에 대한 응답을 알려주는 것
      setUsers(응답.data); //응답 결과 데이터로 users를 변경하겠다. 
    })
    // ****** 응답을 가져오지 못했을 때 문제가 생겼을 때 ****** //
    .catch(err => {
      alert("가져오지 못했습니다."); //주로 alert 보다 console.log로 작성해서 개발자가 에러를 볼 수 있게 함
    })
  }
    */

  /*
  // 1. axios 성공과 실패에 대한 결과를 처리하는 버전
  useEffect(() => {
    모든유저보기();  
  }, [] );

  const 모든유저보기 = () => { 
    axios.get("/users") 
    .then(응답 => { 
      setUsers(응답.data); 
    })
    .catch(err => {
      alert("가져오지 못했습니다.");
    })
  }

  //2. axios 성공에 대한 결과만 보여주는 버전 async await 
  // async = 기능 좀 실행해보자  await = 일단 기다려 내가 값 좀 가져와볼게
  const 모든유저보기 = async () => {
    const 응답 = await axios.get("/user") //Controller에 있는 users 주소에 방문해서 데이터 좀 가져올게
    //가져오기를 성공하면
    setUsers(응답.data); //가져오는데 성공하면 가져온 데이터로 유저목록을 만들어 주는 것 
  }
*/

/* *********모든 유저 보는 기능******** */
// async await 버전 사용
const 모든유저보기 = async () => {
  const res = await axios.get('/users');
  setUsers(res.data);
};


/* *********유저 추가 버튼********* */
// async await 사용해서 유저 추가하기 addUser에서 가져온 user 한 명을 넣어주기
const addUser = async (user) => {
  const res = await axios.post('/users', user); // controller postMapping으로 전달하는 유저 정보
  //  ...users 기존에 작성한 유저목록에 유저 데이터 하나를 추가
  setUsers([...users], res.data);
}


/* *********유저 삭제 버튼********* */
const deleteUser = async(id) => {
  /*
   "" '' = 모두 글자 취급하는 따옴표 
   ex ) http://localhost:3000/users?id=${id}

   ``    = 글자 안에 특정값을 변수명으로 취급해야할 때
         = ``안에서 변수명을 처리해야하는 값은 ${} 사용한 다음 ${융통성있게 변경되어야하는 변수명} 작성
   ex ) http://localhost:3000/users?id=1}
  
  
  */
  await axios.delete(`/users?id=${id}`);
  /* 
  자바 컨트롤러에서  @DeleteMapping("/{id}") 매개변수 = 파라미터에(@PathVariable  int id )작성 
  리액트 axios에서 id=${id} 이다.
  나중에 주소값에 id 대신 삭제할 번호가 들어갈 수 있도록 설정

  자바 컨트롤러에서 @DeleteMapping() 에 특정 id 값을 설정하지 않을 경우
  매개변수 = 파라미터에 (@RequestParam(value="id") int id) //(value="id") = 프론트엔드에서 가져온 id값
  params : {id}
  await axios.delete(`/users`,{parmas:{id} });
  */
  setUsers(users.filter(user => user.id != id));
   /*
   setUsers(users.filter(user => user.id != id));
   user => 현재 저장되어 있는 유저들 리스트
   user.id != id => user.id  유저 아이디와 id(삭제하고자하는 유저 아이디) 가 일치하지 않으면 
   setUser (새로운유저목록)에 포함시키고
   id(삭제하고자하는 유저 아이디)와 user.id 가 일치하는 아이디는 삭제한 다음
   setUser (새로운유저목록)을 완성시킨다.

   filter 유저목록 걸러내기 기능
   filter = 조건
  */
}


/* *********유저 수정 버튼********* */
const updateUser = async(user) => {
  await axios.put('/users',user); //putMapping에서 /users로 주소값이 설정된 수정하는 주소로 연결
  setUsers(users.map(u => (u.id === user.id ? user : u)));
  // 수정한 유저의 id값이 일치하는지 확인하고, id값이 일치하지 않다면 기존에 있던 유저정보로 수정하지 않고 전달
}

/* 수정하기 버튼이 잇다면 수정 취소하기랑 확인버튼이 있을 것 */
/* 수정하기 버튼 잇다면 수정 취소하기 확인 */
const cancelEdit = () => {
  setUserToEdit(null); // 유저정보 수정을 취소하겟다 해서 null 빈값으로 변경하는 트릭
}

/* 유저 수정을 완료하면 유저 목록에 수정된 유저를 전달 */
const editUser = (user) =>{
  setUserToEdit(user);
}

return (
  <div className="App">
    <h1>유저 관리하기</h1>
    <UserForm addUser={addUser} />
    <UserTable users={users}  deleteUser={deleteUser} updateUser={updateUser} editUser={editUser}/>
    {UserToEdit && (
      <EditUserForm
      userToEdit = {UserToEdit}
      updateUser = {updateUser}
      cancelEdit = {cancelEdit}
      />
    )}
  </div>
);
}

export default App;
