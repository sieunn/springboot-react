import React, {useContext} from "react";
import AuthContext from "./AuthContext";
import {Link } from "react-router-dom";

const Header = () => {
    const {loginMember, setLoginMember} = useContext(AuthContext);
    /*
    [] 변수를 새로 설정
    const [loginMember, setLoginMember] = useContext(AuthContext);
    {} 외부에서 작성된 변수를 가져와서 사용할 때 설정
    const {loginMember, setLoginMember} = useContext(AuthContext);
    */

    //localStorage : 고객 컴퓨터 웹사이트에 데이터를 영구적으로 저장
    //localStorage : 저장된 데이터는 브라우저를 닫거나 컴퓨터를 껏다 켜도 유지
    //사용자가 타이머를 맞춰서 삭제하거나, 로그아웃을 하거나 캐시를 지우지 않는한 유지
    //대포적으로 구글 크롬 로그인
    const handle로그아웃기능 = () => {
        setLoginMember(null);
        localStorage.removeItem('loginMember');
    }

    return (
        <header>
        <h1>헤더부분</h1>
        <nav>
            {/*loginMember가 ? (존재한다면) : (존재하지않는다면)*/}
            {/*
                                                    java dto.NaverUser에 저장된 변수명 중 이름을 갖고오고싶다면 name
            loginMember    ? (<span>환영합니다.{loginMember.dto에저장된변수명}님</span>) : ()
            */}
            {loginMember? (
                <div>
                    <span>환영합니다.{loginMember.name}님</span>
                    <button onClick={handle로그아웃기능}>로그아웃</button>
                </div>
        ) : (
            <div>
            <Link to="/login">로그인하기</Link>
            <Link to="/api/naver">회원가입하기</Link>
            </div>
        )}
        </nav>
        </header>
    )
}
export default Header;