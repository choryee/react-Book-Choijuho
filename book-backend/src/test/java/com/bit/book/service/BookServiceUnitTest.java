package com.bit.book.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.exceptions.base.MockitoException;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.context.junit.jupiter.SpringExtension;
/**
 * 
 * BookService테스트할려면, BookRepository가 DI 되어야 한다<-이러면 단위테스트가 아닌것이다
 * BookRepository를 가짜 객체로 만들 수 있다. 그것을 MockitoExtension가 지원해준다.
 *
 */

import com.bit.book.domain.Book;
import com.bit.book.domain.BookRespository;

@ExtendWith(MockitoExtension.class) 
public class BookServiceUnitTest {
	
	@InjectMocks //BookService객체가 만들어 질때, 해당 파일(BookServiceUnitTest)에 
	//@Mock(BookRespository)로 등록된 모든 애들을 주입받는 것.
	private BookService bookService;
	
	@Mock //Mockito환경하에서 거기의 메몰에 띄우는 가짜.(실제 스프링환경의 메몰과 다른 메몰에)
	private BookRespository bookRespository;
	
	
	@Test // 25강.
	public void 저장하기_테스트() {
		//given
		Book book=new Book();
		book.setTitle("책제목1");
		book.setAuthor("책저자1");
		
		//stub
		when(bookRespository.save(book)).thenReturn(book);
		
		//test execute
		Book bookEntity=bookService.저장하기(book);
		
		//then
		assertEquals(bookEntity, book);
		
		
		
	}
	

}
















