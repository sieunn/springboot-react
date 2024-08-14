package com.kh.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//React 3000에서 접속할 수 있도록 설정
@Configuration
public class WebConfig implements WebMvcConfigurer {
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		
		registry.addMapping("/**") //3000뒤에 붙는 url 모두 허용
		.allowedOrigins("http://localhost:3000") //3000 ok
		.allowedMethods("GET","POST","PUT","DELETE","OPTIONS") //url 모든 동작 ok
		.allowCredentials(true); //쿠키나 세션과 같은 자격 허용
	}
}
