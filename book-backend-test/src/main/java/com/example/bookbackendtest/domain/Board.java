package com.example.bookbackendtest.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;

    @Lob
    private String content;

    @ColumnDefault("0")
    private int count;

   // private int userId; //이런식으로 해서, 이것을 FK로 하는게 전통적.
    @JoinColumn(name = "userId") // 왼쪽은 나(Board)보다 위에 있는 것 의미. 즉, userId를 FK로 만드는 것.
    // 나(Board)와 @JoinColumn의 "userId"가 비교됨. 나가 Join되어지므로, 나가 하인됨. userId가 주인임.
    // @JoinColumn 붙이면, FK만들고, 그 FK에 해당하는 것이 나(Board)의 (연관관계의) '주인'이다 의미됨.
    @ManyToOne //Many-Board, One-User임.
    private User user; // 스프링에서 왼쪽처럼 객체로 넣으면, DB는 인식못하므로, 위에 "userId"를 걸어주면, 객체를 컬럼(FK로 인식하면서)으로 만들어줌. 20강.

 //   @JoinColumn(name = "replyId") 블로그 22강.
    @OneToMany(mappedBy = "board", fetch = FetchType.EAGER) //여기에 Reply는 Board를 select할때, 그냥 같이 select해야할 것이지, FK를 여기에 만들지 마세요
    private List<Reply> reply;

    @CreationTimestamp
    private Timestamp createDate;
}
