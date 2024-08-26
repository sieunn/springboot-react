package com.kh.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.kh.dto.Chicken;
import com.kh.repository.ChickenRepository;

@Service
public class ChickenService {

	@Autowired
	private ChickenRepository chickenRepository;
	
	//치킨테이블 모두 보기 -> List로 목록으로 전체보기 어떤목록?
	//List<Chicken> 목록<주제>
	public List <Chicken> getAllChickens(){
		return chickenRepository.findAll();
	}
	
	//치킨 메뉴 추가하기
	public Chicken createChicken(Chicken chicken) {
		return chickenRepository.save(chicken); //티킨에 대해서 DTO에 작성된 컬럼들에 모두 삽입
	}
	
	// 치킨 메뉴 상세보기
	public Chicken findById(Integer id) {
		return chickenRepository.findById(id)
				.orElseThrow(()->new RuntimeException("일치하는 정보를 찾을 수 없습니다."));
	}
	
	//findById를 작성해줄 때는 아이디를 찾지 못할 예외사항을 필수로 작성해줘야함
	//.orElseThrow()
	//치킨 메뉴 수정하기  id=수정할 컬럼 아이디, uc=수정된 내용 저장할 치킨 객체
	public Chicken updateChicken(Integer id,Chicken uc) {
		Chicken chicken = chickenRepository.findById(id)
						.orElseThrow(()->new RuntimeException("치킨을 찾을 수 없습니다."));
		//치킨 객체에 수정된 치킨 이름을 가져와서 넣어주기
		//set -> 덮어쓰기 , get-> 리액트에서 소비자가 작성한 내용 가져오기
		chicken.setChickenName(uc.getChickenName());
		chicken.setDescription(uc.getDescription());
		chicken.setPrice(uc.getPrice());
		return chickenRepository.save(chicken);
	}
	
	//치킨 메뉴 삭제하기
	public void deleteChicken(Integer id) {
		Chicken c = chickenRepository.findById(id)
				.orElseThrow(()->new RuntimeException("일치하는 정보를 찾을 수 없습니다."));
		chickenRepository.delete(c);
	}
	
	//치킨 검색기능 추가
	public List<Chicken> searchChickens(String query) {
		return chickenRepository.findByChickenNameContainingIgnoreCase(query);
	}
	
}







