import logo from './logo.svg';
import './App.css';
import NaverAPI from './component/NaverAPI';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './component/Layout/Header';
import { useEffect, useState } from 'react';
import AuthContext from './component/Layout/AuthContext';
import NaverSignUp from './component/NaverSignUp';
import Login from './component/Login';
//html 파일이 1개밖에 없는 React 에서는 
//Router를 이용해서 각 js 파일의 경로 설정을 해줘야함
//BrowserRouter = Router : 웹에 전체적인 경로
//Switch -> Routes: 경로들
//Route  : 경로
function App() {
  //로그인 정보를 받고 전달
  const [loginMember, setLoginMember] = useState(null);

  //만약 로그인한 정보가 있다면 localStorage 저장
  useEffect(()=> {
    if(loginMember){
      localStorage.setItem("loginMember", JSON.stringify(loginMember));
    }
    //로그인한 멤버가 변경될 때마다 새로 저장
  },[loginMember]);

  //로그인이 저장된 정보를 전달
  useEffect(()=> {
    const savedMember = localStorage.getItem("loginMember");
    //만약에 loginMember 변수에 저장된 회원정보가 존재한다면 setLgoinMember에 넣어주겠다
    if(savedMember){
      setLoginMember(JSON.parse(savedMember));//데이터 손실 우려해서 json 형식으로 변환(parse)
    }
  },[]);

  return (
    <AuthContext.Provider value={{loginMember,setLoginMember}}>
    <Router>
      <Header/>
      <Routes>
        <Route path='/login' element={<Login />}  />
        <Route path='/api/naver' element={<NaverAPI />}  />
        <Route path='/signup/naver' element={<NaverSignUp />} />
      </Routes>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
