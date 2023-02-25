package com.example.bookbackendtest.service;


import com.example.bookbackendtest.domain.Book;
import com.example.bookbackendtest.domain.BookRepository;
import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.util.ReadOnlyStringMap;
import org.apache.logging.log4j.util.Supplier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookService {

    private final BookRepository bookRepository;

    @Transactional
    public Book save(Book book){
        return bookRepository.save(book);
    }

    @Transactional(readOnly = true)
    public Book selectOne(Long id){
        return bookRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException(" 아이디를 확인하세요!!"));
    }

//    @Transactional(readOnly = true)
//    public Book selectOne(Long id) {
//        return bookRepository.findById(id)
//             .orElseThrow(new Supplier<IllegalArgumentException>() {
//
//                 @Override
//                    public IllegalArgumentException get() {
//                        return new IllegalArgumentException("아이디를 확인하세요!!");
//                    }
//                });
//    }


        @Transactional(readOnly = true)
        public List<Book> selectAll(){
        return bookRepository.findAll();
        }

    @Transactional
        public Book update(Long id, Book book){
        Book bookEntity=bookRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("수정 아이디를 확인하세요!!"));

        bookEntity.setTitle(book.getTitle());
        bookEntity.setAuthor(book.getAuthor());
        return bookEntity;

        }

    @Transactional
    public String delete(Long id){
        bookRepository.deleteById(id);
        return "ok";
        }


}
