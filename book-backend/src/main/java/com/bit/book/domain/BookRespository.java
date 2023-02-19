package com.bit.book.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//@Repository라고 원래 적어야 스프링 IoC에 빈으로 등록되는데, JpaRepository 상속하면 생략가능.
// JpaRepository는 CRUD 함수를 가지고 있다.
public interface BookRespository extends JpaRepository<Book, Long>{

	
}
