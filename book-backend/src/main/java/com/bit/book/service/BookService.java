package com.bit.book.service;

import java.util.List;
import java.util.function.Supplier;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bit.book.domain.Book;
import com.bit.book.domain.BookRespository;

import lombok.RequiredArgsConstructor;

//20강.
@Service //기능을 정의할 수 있고, 트랜젝션을 관리할 수 있음. Repository기능 포함, 다른 데서 데이터 가져오고, 여러가지 기능을 만들때
//Repository는 DB에서 가져오기, 추가하기 등 하는 것. Repository는 DB와 관련되서 하는 기능.
@RequiredArgsConstructor
public class BookService {
	// 함수중 송금()함수는 레파지토리에 여러개의 함수 실행시키고, 성공후 commit or rollback등 서비스 하는 것.
	
	private final BookRespository bookRespository;
	
	@Transactional //여기 서비스 매소드가 종료될때 commit할지 rollback할지를 트렌젝션을 관리하겠다 의미
	public Book 저장하기(Book book) {
		return bookRespository.save(book);
	}
	
	@Transactional(readOnly = true) // (readOnly = true)JPA변경감지라는 내부 기능 활성화 막음. select 할때는 걸어줘야
	public Book 한건가져오기(Long id) {
		return bookRespository.findById(id)
				.orElseThrow(new Supplier<IllegalArgumentException>() { //림다식으로 표현 가능.밑처럼 public Book 수정하기
					
					@Override
					public IllegalArgumentException get() {
						return new IllegalArgumentException("(한건 가져오기) 아이디를 확인하세요!!");
					}
				});
	}
	
	@Transactional(readOnly = true) //
	// (readOnly = true)JPA변경감지라는 내부 기능 활성화 막음. select 할때는 걸어줘야
	public List<Book> 모두가져오기(){
		return bookRespository.findAll();
	}


	@Transactional
	public Book 수정하기(Long id, Book book) {
		//더티체킹. bookEntity는 DB에서 들고와서 JPA에 영속화(=DB에서 들고오면 영속화됐다고 함)된 것이 됨.
		Book bookEntity=bookRespository.findById(id)
				.orElseThrow(()->new IllegalArgumentException("(수정하기) 아이디를 확인하세요!!"));
		bookEntity.setTitle(book.getTitle());
		bookEntity.setAuthor(book.getAuthor());
		
		return bookEntity;
		}// 여기서 이 매소드 종료시 트랜젝션이 종결되고, 영속화되어 있는 테이터를 DB에 갱신(flush)하고, commit함 ==>더티체킹이라 함.
	
	
	@Transactional
	public String 삭제하기(Long id) {
		bookRespository.deleteById(id);
		return  "Ok"; //deleteById의 리턴은 원래 void인테, 그냥 삭제  확인용으로 string으로 만들어줌.
	}
	
	
	
	
	
	
}
