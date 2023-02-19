package com.bit.book.domain;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.transaction.annotation.Transactional;

import com.bit.book.service.BookService;

//단위테스트-DB관련된 빈이 IoC에 등록되면 됨. 22강.

@Transactional
@DataJdbcTest // DB관련된 빈이 IoC에 등록되면 되므로, 테이타 관련된 것만 띄움.
@AutoConfigureTestDatabase(replace = Replace.ANY)// 가짜 DB에 테스트하게 해주는 것.
public class BookRepositoryUnitTest {
	
	@Autowired
	private BookRespository bookRespository;
	
	
	@Test //25강.
	public void save_테스트() { //Junit 에러남.
		//given
		Book book=new Book(null,"책제목1","책저자1");
		
		//when
	   Book bookEntity=bookRespository.save(book);
		
		//then
		assertEquals("책제목1", bookEntity.getTitle());
		
		
	}
	
	
	
	
	
	

}
