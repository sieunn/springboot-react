package com.kh.common.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//React :3000포트 SpringBoot :백엔드 포트가 
//온전히 제대로 연결해 줄 수 있도록 설정
//WebSocket 프론트와 백엔드가 서로 상호작용을 주기적으로 진행할 때
//좀 더 안전하게 연결을 계속 진행하겠다. 설정

@Configuration //설정
public class WebConfig implements WebMvcConfigurer {
	
	//이미지폴더 경로를 react가 가져갈 수 있도록 허용
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry r) {
		r.addResourceHandler("/images/**")
		.addResourceLocations("C:/Users/user1/Desktop/saveImage/");//바탕화면에 지정한 이미지 경로
	}
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**") //맨 위에 있어야함
				.allowedOrigins("http://localhost:3000")
				//.allowedOrigins("/*") 이렇게 해줘도 되고 위에처럼 써도됨
				.allowedMethods("GET","POST","PUT","DELETE", "OPTIONS")
				.allowedHeaders("*");
		/*
		 * .allowedOrigins("http://localhost:3000") 이 주소로
		 * .addMapping("/**") :  3000번 뒤에 오는 모든 url api 주소를 모두 혀용
		 * .allowedMethods("GET","POST","PUT","DELETE", "OPTIONS")
		 *  :  http://localhost:3000/** 들어오는 모든 요청 허용 (보기,넣기,수정,삭제,기타등등)
		 *  .allowedHeaders("*"); : <html> <head> 정보에 들어갈 모든 요청 ok!
		 * 
		 * */
	}
}
