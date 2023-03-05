package com.example.bookbackendtest.web;

import com.example.bookbackendtest.domain.Book;
import com.example.bookbackendtest.domain.Reply;
import com.example.bookbackendtest.service.ReplyService;
import com.example.dto.ResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class ReplyController {

    private final ReplyService replyService;

    @CrossOrigin
    @PostMapping("/book/{bookId}/reply")
    public ResponseDto<Integer> replySave(@PathVariable int bookId, @RequestBody Reply reply){
        System.out.println("bookId받기===="+bookId);

        replyService.save(bookId, reply);
        return new ResponseDto<>(HttpStatus.OK.value(), 1);

    }

    @CrossOrigin
    @DeleteMapping("/book/{bookId}/delete/{replyId}")
    public ResponseEntity<?> replyDelete(@PathVariable int replyId){

        return new ResponseEntity<>(replyService.delete(replyId), HttpStatus.OK);
    }


}
