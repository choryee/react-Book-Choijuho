230219


==환경==========
spring boot v. 3.0.2 <==위 최초 생성시에 창에 보임
gradle,
H2,

---------------------------------------------------------------------
backend는  book-backend-test
frontend는 book-frontend 또는 book-frontend-test11 로 해야
---------------------------------------------------------------------
리액트 한글 강의
https://react.vlpt.us/basic/08-manage-input.html

H2 db보기 (서버 구동후)
http://localhost:8080/h2-console
url: jdbc:h2:mem:booktestdb

intellij 스프링부트 gradle 프로젝트 생성 방법
https://imksh.com/98
+ 최주호 react+스프링부트 19강 첨 프로젝트 생성있음.

book-backend가 run 안되서(230219), 새로 만든 것.

book-backend-test 구조는
bookService.java에
bookRepository를 DI하고, 거기에 CRUD를 만듬.

bookController.java에
RestAPI로 bookService의 CRUD를 리턴해준 역할.

	@CrossOrigin // CORS오류 피하기위해(.js요청되는 것 막는 것 푸는 것). BookController 바로 직전에 적용됨.
	@PostMapping("/book")
	public ResponseEntity<?> save(@RequestBody Book book){
		//ResponseEntity<>가 bookService.저장하기(book)가 Book타입이므로, 생략하면 Book타입으로 리턴함.
		System.out.println("title :"+book.getTitle());
		System.out.println("author :"+book.getAuthor());
		return new ResponseEntity<>(bookService.저장하기(book), HttpStatus.OK);
	}


