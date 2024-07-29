package com.kh.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api")
public class OAuthController {
	/*
	 @Value = 환경설정 application.properties나 config.properties에 작성한
	 키 이름을 가져오고 키에 담긴 값을 가져오는 어노테이션
	 * */
	
	// application.properties naver.client-id = uk65cQeD0dLQdanRBfH8
	@Value("${naver.client-id}")
	private String clientId; //clientId = uk65cQeD0dLQdanRBfH8
	
	//application.properties naver.client-secret=vkmwrDygKW
	@Value("${naver.client-secret}")
	private String clientSecret; //clientSecret = vkmwrDygKW
	
	//application.properties naver.redirect-uri=http://localhost:3000/naverLogin
	@Value("${naver.redirect-uri}")
	private String redirectUri; //redirectUri = http://localhost:3000/naverLogin
	
	//application.properties naver.state=RANDOM_STATE
	@Value("${naver.state}")
	private String state; //state = RANDOM_STATE
	
	/*
	app.get('/naverLogin', function (req, res) {
  	api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirectURI + '&state=' + state;
   	res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
   	res.end("<a href='"+ api_url + "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>");
 });
	 * */
	@GetMapping("/naverLogin") //localhost:9010/api/naverLogin
	public String naverLogin() {
		String  api_url = "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=" + clientId + "&redirect_uri=" + redirectUri + "&state=" + state;
		return "<a href='"+ api_url + "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>";
	}
	
	/*
	 url 에 {}=변수명 표시가 없으면 @RequestParam 이나 @RequestBody  
	 url 에 {}=변수명 표시가 있으면 @PathVariable {} 안에있는 변수명에 값을 집어넣는다.는 뜻
	 * */
	@GetMapping("/callback")
	public String callback(@RequestParam String code, @RequestParam String state) {
		// 네이버에서 로그인을 성공하고 성공했을 때 받는 값
		//1. clientId 		= 어디회사의 들어왓는지 (특정나라)
		//2. clientSecret   = 회사 들어오기 위한 비밀번호 (내 여권)
		//3. redirectUri  	= 들어오기 위한 심사를 무사히 완료했으면 내보내는 위치로 전달 (입국 심사)
		//4. code 			= 네이버로부터 무사히 들어왔다는 인증코드를 받음
		//5. state 			= CSRF 공격을 방지하기 위해 사용
		String api_url = "https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id="
			     + clientId + "&client_secret=" + clientSecret + "&redirect_uri=" + redirectUri + "&code=" + code + "&state=" + state;
	    //RestTemplate = HttP 메서드 (GET POST PUT DELETE) 통해서 
		//데이터를 JSON 형식으로 데이터를 처리
		RestTemplate restTemplate = new RestTemplate();
		//api_url 주소로 응답받은 결과를 String = 문자로 가져와서 사용하겠다.
	    String 응답결과 = restTemplate.getForObject(api_url, String.class);
	    return 응답결과;
	}
}








