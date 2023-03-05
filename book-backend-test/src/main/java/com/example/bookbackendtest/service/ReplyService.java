package com.example.bookbackendtest.service;

import com.example.bookbackendtest.domain.Book;
import com.example.bookbackendtest.domain.BookRepository;
import com.example.bookbackendtest.domain.Reply;
import com.example.bookbackendtest.repository.ReplyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReplyService {

    private final ReplyRepository replyRepository;
    private final BookRepository bookRepository;


    @Transactional(readOnly = true)
    public List<Reply> selectAll(){
        return replyRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Reply selectOne(int id){
        return replyRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("아이디를 확인하세요"));

    }

    @Transactional
    public void save(int bookId, Reply requestreply){
        Long lbookId=Long.valueOf(bookId);
        System.out.println("lbookId===>>>"+lbookId);

        Book book11=bookRepository.findById(lbookId)
                        .orElseThrow(()->{return new IllegalArgumentException("게시글 id를 찾을수 없습니다");});

        requestreply.setBook(book11);

        replyRepository.save(requestreply);
    }

    @Transactional
    public Reply update(int id, Reply reply){
        Reply replyEntity=replyRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("수정 아이디를 확인하세요"));
        replyEntity.setBoard(reply.getBoard());
        replyEntity.setBook(reply.getBook());
        replyEntity.setContent(reply.getContent());
        replyEntity.setUser1(reply.getUser1());

        return replyEntity;
    }

    @Transactional
    public String delete(int id){
        replyRepository.deleteById(id);
         return "ok";
    }



}
