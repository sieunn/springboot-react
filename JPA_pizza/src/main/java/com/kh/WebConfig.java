package com.kh;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**") //front 포트로 가져오는 뒤 api 주소 모두 허용
		.allowedOrigins("http://localhost:3000") //주소와 포트 허용
		.allowedMethods("GET","POST","PUT","DELETE","OPTIONS")//DB와 주고받고 삭제하고 수정 등 모두 혀용
		.allowCredentials(true); //쿠키나 세션과 같은 자격허용 "*" 사용 가능
	}
}
