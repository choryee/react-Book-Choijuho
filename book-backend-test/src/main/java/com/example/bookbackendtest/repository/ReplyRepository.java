package com.example.bookbackendtest.repository;

import com.example.bookbackendtest.domain.Reply;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReplyRepository extends JpaRepository<Reply, Integer> {
}