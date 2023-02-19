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

import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;

import com.bit.book.domain.Book;
import com.bit.book.service.BookService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.extern.slf4j.Slf4j;
import org.hamcrest.Matchers;

//22강, 23강 첨.

//단위테스트-컨트롤러만 테스트(Filter, Controller, ControllerAdvice가 메몰에 뜸.
//통합테스트- 전체를 테스트 하는 것.

@WebMvcTest
@Slf4j
public class BookControllerUnitTest {
	
	@Autowired
	private MockMvc mockMvc;
	
	@MockBean //BookService가 IoC환경에 빈으로 등록됨. 왜 가짜로 만드나? 안그러면, Repository와 연결되야 해서, 단위테스트가 안되서
	private BookService bookService;
	
//	@Test
//	public void save_테스트() {
//		log.info("save_테스트() 시작============================");
//		Book book= bookService.저장하기(new Book(null,"어린왕자", "King"));
//		System.out.println("book : "+book); <- null나옴. 왜냐면, 위 BookService가 @MockBean로 띄운 껍데기라서 
//	}
	
	@Test
	public void save_테스트() throws Exception {
	 //given (테스트를 하기 위한 준비)<- BDDMockito패턴임<-given,when,then. 이런것을 stub이라고 함.
		// json 데이터롤 만들어 줌. 밑에거 stub이라고 함.
	 String content=new ObjectMapper().writeValueAsString(new Book(null,"어린왕자", "King"));	
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
		
		when(bookService.모두가져오기()).thenReturn(books);
		
		
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
		when(bookService.한건가져오기(id)).thenReturn(new Book(1L,"자바공부하기","Jon"));
		
		//when
		ResultActions resultAction=mockMvc.perform(get("/book/{id}",id)
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		//then
		resultAction
		 .andExpect(status().isOk())
		 .andExpect(jsonPath("$.title").value("자바공부하기"))
		 .andDo(MockMvcResultHandlers.print());
			
	}
	
	
	@Test
	public void update_테스트() throws Exception{
		//given
	
		
		Long id=1L;
		Book book=new Book(null,"c++따라하기", "King");
		 String content=new ObjectMapper().writeValueAsString(book);	
		when(bookService.수정하기(id, book)).thenReturn(new Book(1L,"자바공부하기","Jon"));
		
		//when
		ResultActions resultAction=  mockMvc.perform(put("/book/{id}", id)
				 .contentType(MediaType.APPLICATION_JSON_UTF8)
				 .content(content)
				 .accept(MediaType.APPLICATION_JSON_UTF8));
		
		//then
		resultAction
		 .andExpect(status().isOk())
		 .andExpect(jsonPath("$.title").value("자바공부하기"))
		 .andDo(MockMvcResultHandlers.print());
			
	}
	
	
	@Test
	public void delete_테스트() throws Exception{
		//given
			
		Long id=1L;
		
		when(bookService.삭제하기(id)).thenReturn("OK");
		
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


























