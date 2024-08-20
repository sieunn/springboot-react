package com.kh.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration //필수
public class WebConfig implements WebMvcConfigurer{

	//cntl + sapce 3번째
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**") //3000 다음에 오는 api url 모두 허용
				.allowedOrigins("http://localhost:3000") //localhost:3000 주소 접속 허용
				.allowedMethods("GET","POST","PUT","DELETE", "OPTIONS") // httpMethod 와 기타 옵션 모두 허용
				.allowedHeaders("*"); // 데이터, 이미지, 파일, 다중파일 등 모두 허용
	}
}