import React, { useState } from "react";
import LoginContext from "./conponent/LoginContext";
import Signup from "./conponent/SignUp";
import Login from "./conponent/Login";
import TodoList from "./conponent/TodoList";
import './App.css';


function App() {

  const [singUpview, setSignUpView] = useState(false);
  const [loginMember, setLoginMember] = useState(null);
  const [todoList, setTodoList] = useState([]);

 return (
  <LoginContext.Provider value={{loginMember, setLoginMember, todoList, setTodoList}}>
    <button onClick={() => {setSignUpView(!singUpview)}}>
    {singUpview ? ('회원가입 닫기') : ('회원가입 열기')}
    </button>

    {/* 회원가입 화면 */}
    <div className="signUp-wrapper">
      {singUpview === true && (<Signup/>)}
    </div>

    <h1>Todo List</h1>
    <Login />
    <hr/>
    {/* 로그인이 되었을 때 로그인 한 회원의 todoList 출력 */}
    {loginMember && (<TodoList/>)}

  </LoginContext.Provider>
 );
}

export default App;
