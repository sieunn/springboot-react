import React,{useEffect, useState} from "react";
import axios from 'axios';
import { useLocation } from "react-router-dom"; 

/*
useLocation : URL의 정보를 포함한 객체
              경로,해시값,문자열값 등을 가지고 온 객체
*/

function UserInfo(){
    const [userInfo,setUserInfo] = useState(null);
    const location = useLocation();
    const[loading, setLoading] = useState(true);

    //어떤 클릭이 없어도 UserInfo 페이지 들어오면 자동으로 실행되는 효과
    useEffect(()=>{
        //URLSearchParams : URL에서 ? 뒤에 붙는 키-벨류값을 가져옴
        //String redirectUrl = "http://localhost:3000/userinfo?access_token=" + accessToken;
        //userinfo ? 뒤에 붙는 access_token 에 있는 데이터를 포함
        const a = new URLSearchParams(location.search);
        const accessToken = a.get('access_token'); 
        console.log("토큰확인 : " + accessToken);
        //URLSearchParams 으로 가져온 수많은 값중에서 키이름이 access_token 인 값만 가져오겠다


        //get을 이용해서 userinfo 정보 가져오기
        //String redirectUrl = "http://localhost:3000/userinfo?access_token=" + accessToken;
        //자바에서는 userinfo?access_token=" 뒤에 + 를 붙여 변수를 사용했지만
        //자바스크립트에서는 ``를 사용해서 const accessToken = a.get('access_token'); 를 가져옴

        //만약에 accessToken 값이 존재하면 axios 발동
        if(accessToken){
            axios.get(`/userinfo?access_token=${accessToken}`)
            .then(response => { //.then((res) => {  // -> res를 ()로 막아버리면 => 이후로는 선언되지않는 지역변수명이 되기때문에 res를 찾을 수없게됨
                setUserInfo(response.data);
                setLoading(false);
            })
            .catch(err => {
                alert("정보를 가져오지 못했습니다.");
            });
        } 

    },[location.search]); //location.search 로 검색된 키-값 중 access_token = abc123
                          //access_token 값을 가져오면 useEffect를 사용하겠다.

    if(loading){
        return <div>데이터 정보 가져오는 중 ...</div>
    }

    return (
        <>
        <h1>유저정보</h1>
        {userInfo ? (
        <div>
            <img src={userInfo.response.profile_image} style={{height: '250px', width: '250px'}} disabled /><br/>
            <input type="text" value={userInfo.response.id} disabled/><br/>
            <input type="email" value={userInfo.response.email} disabled/><br/>
            <input type="text" value={userInfo.response.name} disabled/><br/>
            <input type="text" value={userInfo.response.nickname} disabled/><br/>
            <input type="text" value={userInfo.response.gender} disabled /><br/>
            <input type="text" value={userInfo.response.birthday} disabled />
            {/* 네이버에서 가져온 id값을 input에 넣어주고 수정하지 못하게 막음처리 */}
        </div>
        ) : (
        <p>유저를 찾을 수 없습니다.</p>
        
        )}

        <div>
            <h2>회원가입에 필요한 아이디 및 비밀번호 작성하기</h2>
            <input type="text" />
        </div>
        </>
    );
}
export default UserInfo;
