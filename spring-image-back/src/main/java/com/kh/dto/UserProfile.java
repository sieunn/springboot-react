package com.kh.dto;

import java.time.LocalDateTime;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString //db에서 값이 제대로 넘어왔는지 체크용
public class UserProfile {
	private int userId;
	private String username;
	private String profileImageUrl;
	private LocalDateTime createdAt;
	//LocalDateTime = 현재 날짜와 시간
}
