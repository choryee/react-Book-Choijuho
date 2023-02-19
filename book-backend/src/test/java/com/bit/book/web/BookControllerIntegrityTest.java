package com.bit.book.web;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.transaction.annotation.Transactional;

import com.bit.book.domain.Book;
import com.bit.book.domain.BookRespository;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.extern.slf4j.Slf4j;

//22강.
//통합테스트-컨트롤러로 전부를 테스트.
//모든 Bean(메모리에 저장된 객체)를 똑같이 IoC에 올리고 테스트.
@SpringBootTest(webEnvironment = WebEnvironment.MOCK)//실제 톰캣에 올리는 게 아니라, 다른 톰캣으로 테스트함
@AutoConfigureMockMvc //밑 private MockMvc를 IoC에 띄워주는 것.
@Transactional //각각 테스트함수(@Test)가 종료될때마다, rollback해주는 어노테이션.
@Slf4j
public class BookControllerIntegrityTest {
	
	@Autowired
	private MockMvc mockMvc;
	
	@Autowired
	BookRespository bookRespository;
	
	@Autowired
	private EntityManager entityManager;
	
	@BeforeEach
	public void init() { //밑 테스트매소드 각각 시작할때마다, 오트증가를 1로 다시 세팅해줌. 24강.
		//밑은 H2 DB일때, 다른 디비면 쿼리 바꿔야.26강.
		entityManager.createNativeQuery("alter table book alter column id restart with 1").executeUpdate();
		
	}
	
	
	@Test
	public void save_테스트() throws Exception {
	 //given (테스트를 하기 위한 준비)<- BDDMockito패턴임<-given,when,then. 이런것을 stub이라고 함.
		// json 데이터롤 만들어 줌.
		Book book=new Book(null,"어린왕자", "King");
	 String content=new ObjectMapper().writeValueAsString(book);	
	 log.info(content);	
	 
	 
	 //when-테스트 실행<-위에서 서버로 보낸 json테이터로 여기서 저장 실행됨.
	 ResultActions resultAction=  mockMvc.perform(post("/book")
			 .contentType(MediaType.APPLICATION_JSON_UTF8)
			 .content(content)
			 .accept(MediaType.APPLICATION_JSON_UTF8));
	 
	 
	  //then-위 테스트의 검증.
	 resultAction
	  .andExpect(status().isCreated())
	  .andExpect(jsonPath("$.title").value("어린왕자"))
	  .andDo(MockMvcResultHandlers.print());
	 
	}
	
	@Test //24강
	public void findAll_테스트() throws Exception{
		
		//given
		List<Book> books=new ArrayList<>();
		books.add(new Book(1L, "부트따라하기", "코스"));
		books.add(new Book(2L, "리액트 따라하기", "타잔"));
		bookRespository.saveAll(books);
		
		
		//when
		ResultActions resultAction=mockMvc.perform(get("/book")
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		//then
		resultAction
		 .andExpect(status().isOk())
		 .andExpect(jsonPath("$", Matchers.hasSize(2)))// "$" jsonpath문법. json안 데이터를 검색하는 것
		 .andExpect(jsonPath("$.[0].title").value("부트따라하기"))
		 .andDo(MockMvcResultHandlers.print());
	
	}
	
	
	@Test
	public void findById_테스트() throws Exception{
		//given
		Long id=1L;
		
		List<Book> books=new ArrayList<>();
		books.add(new Book(null, "부트따라하기", "코스"));
		books.add(new Book(null, "리액트따라하기", "타잔"));
		books.add(new Book(null, "Junit 따라하기", "소년"));
		bookRespository.saveAll(books);
		
				
		//when
		ResultActions resultAction=mockMvc.perform(get("/book/{id}",id)
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		//then
		resultAction
		 .andExpect(status().isOk())
		 .andExpect(jsonPath("$.title").value("리액트따라하기"))
		 .andDo(MockMvcResultHandlers.print());
			
	}
	
	
	@Test
	public void update_테스트() throws Exception{
		//given
		Long id=1L;
		
		List<Book> books=new ArrayList<>();
		books.add(new Book(null, "부트따라하기", "코스"));
		books.add(new Book(null, "리액트따라하기", "타잔"));
		books.add(new Book(null, "Junit 따라하기", "소년"));
		bookRespository.saveAll(books);
		
		
		Book book=new Book(null,"c++따라하기", "King");
		 String content=new ObjectMapper().writeValueAsString(book);	
				 
		//when
		ResultActions resultAction=  mockMvc.perform(put("/book/{id}", id)
				 .contentType(MediaType.APPLICATION_JSON_UTF8)
				 .content(content)
				 .accept(MediaType.APPLICATION_JSON_UTF8));
		
		//then
		resultAction
		 .andExpect(status().isOk())
		 .andExpect(jsonPath("$.id").value(1L))
		 .andExpect(jsonPath("$.title").value("자바공부하기"))
		 .andDo(MockMvcResultHandlers.print());
			
	}
	
	
	@Test
	public void delete_테스트() throws Exception{
		//given
			
		Long id=1L;
		
		//when(bookService.삭제하기(id)).thenReturn("OK");
		
		//when
		ResultActions resultAction=  mockMvc.perform(delete("/book/{id}", id)
				 .accept(MediaType.TEXT_PLAIN));
		
		//then
		resultAction
		 .andExpect(status().isOk())
		 .andDo(MockMvcResultHandlers.print());
		
		MvcResult requestResult=resultAction.andReturn();
		String result=requestResult.getResponse().getContentAsString();
		
		assertEquals("OK", result); //위는 json이 아니라 String으로 받는 거라.25강.14'26
			
	}
	
	

}
