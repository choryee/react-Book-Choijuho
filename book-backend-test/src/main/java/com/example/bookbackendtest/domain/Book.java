package com.example.bookbackendtest.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@ToString(exclude = "reply")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String author;
    private String title;

    //   @OneToMany(mappedBy = "board", fetch = FetchType.EAGER)
    @OneToMany(mappedBy = "book", fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
   @JsonIgnoreProperties({"book"})
    @OrderBy("id desc ")
    private List<Reply> reply;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    @CreationTimestamp
    private Timestamp createDate;
}