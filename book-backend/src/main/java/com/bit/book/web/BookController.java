package com.bit.book.web;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bit.book.domain.Book;
import com.bit.book.service.BookService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class BookController { //21강.
	
	private final BookService bookService;
	
	
//	@GetMapping("/")
//	public ResponseEntity<?> findAll(){
//		return new ResponseEntity<String>("ok", HttpStatus.OK);
//	}
	
	@CrossOrigin // CORS오류 피하기위해(.js요청되는 것 막는 것 푸는 것). BookController 바로 직전에 적용됨.
	@PostMapping("/book")
	public ResponseEntity<?> save(@RequestBody Book book){
		//ResponseEntity<>가 bookService.저장하기(book)가 Book타입이므로, 생략하면 리턴할때 그 타입이 Book타입으로 결정돼 리턴됨.
		System.out.println("title :"+book.getTitle());
		System.out.println("author :"+book.getAuthor());
		return new ResponseEntity<>(bookService.저장하기(book), HttpStatus.OK);
	}
	

	@CrossOrigin
	@GetMapping("/book")
	public ResponseEntity<?> findAll(){
		List<Book> book=bookService.모두가져오기();
		System.out.println(book);
		
		return new ResponseEntity<>(bookService.모두가져오기(), HttpStatus.OK);
	}
	
	@CrossOrigin
	@GetMapping("/book/{id}")
	public ResponseEntity<?> findById(@PathVariable Long id){
		System.out.println("Id: "+id);
		return new ResponseEntity<>(bookService.한건가져오기(id), HttpStatus.OK);
	}
	
	@CrossOrigin
	@PutMapping("/book/{id}")
	public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Book book){
		System.out.println("id :"+id);
		System.out.println("title :"+book.getTitle());
		System.out.println("author :"+book.getAuthor());
		return new ResponseEntity<>(bookService.수정하기(id, book), HttpStatus.OK);
	}
	
	@CrossOrigin
	@DeleteMapping("/book/{id}")
	public ResponseEntity<?> deleteById(@PathVariable Long id){
		return new ResponseEntity<>(bookService.삭제하기(id), HttpStatus.OK);
	}
	
	
	

}
