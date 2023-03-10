package com.example.bookbackendtest.web;


import com.example.bookbackendtest.domain.Book;
import com.example.bookbackendtest.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Path;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class BookController {

    private final BookService bookService;

    @CrossOrigin
    @GetMapping("/book")
    public ResponseEntity<?> findAll22(){
        List<Book> book=bookService.selectAll();
        System.out.println("bookService.selectAll()===>>>"+book);
        return new ResponseEntity<>(book, HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping("/book")
    public ResponseEntity<?> save22(@RequestBody Book book){
        System.out.println("book.getAuthor()===>>"+book.getAuthor());

        return new ResponseEntity<>(bookService.save(book), HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/book/{id}")
    public ResponseEntity<?> selectOne22(@PathVariable Long id){
      //  Book book22=bookService.selectOne(id);
        System.out.println("bookService.selectOne(id)===>>>"+bookService.selectOne(id) );
        return new ResponseEntity<>(bookService.selectOne(id), HttpStatus.OK);
    }

//    @CrossOrigin
//    @GetMapping("/book/{id}")
//    public ResponseEntity<?> findById(@PathVariable Long id){
//        System.out.println("Id: "+id);
//        return new ResponseEntity<>(bookService.한건가져오기(id), HttpStatus.OK);
//    }


    @CrossOrigin
    @PutMapping("/book/{id}")
    public ResponseEntity<?> update22(@PathVariable Long id, @RequestBody Book book){

        return new ResponseEntity<>(bookService.update(id, book), HttpStatus.OK);
    }

    @CrossOrigin
    @DeleteMapping("/book/{id}")
    public ResponseEntity<?> delete22(@PathVariable Long id){
        return new ResponseEntity<>(bookService.delete(id), HttpStatus.OK );
    }

}
