package com.kh.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.kh.dto.BCUser;
import com.kh.repository.BCUserRepository;

@Service
public class BCUserService {
	
	@Autowired
	private BCUserRepository bcUserRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	//패스워드 인코드를 저장
	public void saveUser(BCUser bcUser) {
		//한번 암호화 처리된 암호를 가져오는 것
		bcUser.setPassword(passwordEncoder.encode(bcUser.getPassword()));
		//JAP Repository 안에 save가 이미 저장되어있기 때문에 굳이 작성 x
		bcUserRepository.save(bcUser);
	}
}
