import React, {createContext} from "react";

//로그인한 멤버 정보를 저장하는 context
//새로고침을 하더라도 로그인한 정보가 풀리지 않음
const AuthContext = createContext({
    loginMember : null, //로그인한 멤버 정보를 저장할 변수
    setLoginMember : () => {} //로그인한 멤버 정보를 업데이트 할 변수
    //setLoginMember -> loginMember로 전달
})
export default AuthContext;