package com.bit.book.domain;

import javax.persistence.GeneratedValue;
import javax.persistence.*;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//19강.

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity //서버 실행시 ORM으로 매핑됨.(Object Relation Mapping). 테이블 생성됨.
public class Book {
	
	@Id //Long id를 pk로 하겠다 의미
	@GeneratedValue(strategy = GenerationType.IDENTITY) //H2 DB 번호증가 전략 따르겠다.
	private Long id;
	
	private String title;
	private String author;
	
	//@Data안 쓰고, setter은 사용 안하게 좋다. 그래서, 밑처럼 set함수를 따로 만들어 놓는다
//	public static setBook(Dto dto) {
//		title=dto.getTitle();
//		author=dto.getAuthor();
//	}

}
