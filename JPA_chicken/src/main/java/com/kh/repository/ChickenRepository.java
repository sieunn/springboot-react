package com.kh.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kh.dto.Chicken;

//mybatis - mapper 이 두가지를 설정
//@Repository @Mapper는 interface로 시작
@Repository
public interface ChickenRepository extends JpaRepository<Chicken,Integer>{

	//전체보기 전체넣기 전체수정하기 전체삭제하기 와 같은 기본기능은
	//JpaRepository 안에 모두 들어있음
	
	//특정 값을 찾을 때 쓰는 기능
	//findById(Integer id); -> where 대신 find를 써줌
	//만약에 where 이메일 = '' 비밀번호 ='' 로그인을 한다
	//레포지토리에 findByEmailPassword where절
 }
