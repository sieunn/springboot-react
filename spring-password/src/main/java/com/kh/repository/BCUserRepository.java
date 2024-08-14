package com.kh.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.JpaRepositoryConfigExtension;

import com.kh.dto.BCUser;

/*
 * JpaRepository
 * mybatis와 mapper 생략해서 작성하는 방법
 * sql문을 알아서 작성해줌
 * 
 * findNyEmail 이라는 기능
 * 이메일 찾기 기능
 * BCUser findByEmail(String email);
 * sql문장 만들어줌 select * from BCUser where email = ? ;
 * 
 * */
public interface BCUserRepository extends JpaRepository<BCUser,Integer>{ //int 객체인 Integer
	//save 나 select 등 특정적으로 무언가를 검색하거나 하지 않는 한 기본적인 sql 작성 x
	//BCUser saveUSer(); -> 작성안해도됨
	
	//이메일 찾기 기능
	 BCUser findByEmail(String email);
	
}
