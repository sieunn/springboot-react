package com.kh.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

/*
 * BCryptPasswordEncoder - 이 이름으로 객체 생성하면 안됨
 * Blowfish 암호 알고리즘을 기반
 * Crypt 	암호화 Encrypt의 줄임말
 * password 비밀번호
 * Encoder  데이터를 특정 방식으로 변환하는 역할
 * 
 * SecurityConfig
 * Security 보안
 * Config   설정
 * 
 * 시큐리티를 사용하기 위해서는 build.gradle 설정에 시큐리티를 implementation 으로 보안을 추가해줘야함
 * 
 * */
@Configuration
@EnableWebSecurity
public class SecurityConfig {
	@Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        //http 메서드 (Get, Post, Update, Delete) 모든 동작 ok, 인증이나 권한 검사 하지않고 모든 요청에 접근 허용
		http
            .authorizeHttpRequests(authorize -> authorize
                .anyRequest().permitAll() //비밀번호 없이 9011 포트에 들어갈 수 있도록 연결 허용
            )
            //3000 포트나 외부에서 오는 보호 비활성화
            .csrf(csrf -> csrf.disable());
		//build = 빌딩 = 건물을 짓다
		//위에서 작성된 http 상세설명을 바탕으로 http 관련 건물을 짓는다.
        return http.build();
    }

	//@Bean 패스워드 관련 객체 설정
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}


