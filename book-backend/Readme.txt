2302012
26강부터 복습중


환경======
스프링부트,
JPA,
yml,
H2

새로운 스프링부트 프로젝트 생성
 : https://leeys.tistory.com/12

 intellij 스프링부트 gradle 프로젝트 생성
 https://imksh.com/98

Spring - 실무에서 사용하는 React + SpringBoot 프로젝트 만들기 with Gradle
https://7942yongdae.tistory.com/136



메이븐없이  구동은 src/main/java해서 보이는
BookApplication에서 화살표로 하면, 구동됨

https://phantom.tistory.com/59
현재 DB는 H2로 됨. resources/application.yml 보면

H2 DB구동 방법
집의 내 컴에서는
왼쪽 밑 프로그램 보기에서, 알파벳 H로 찾아가면, H2 폴더에 콘솔 클릭.

H2 db보기
http://localhost:8080/h2-console

JDBC URL:에
jdbc:h2:mem:testdb 를 입력

jdbc:h2:tcp://localhost/~/jpashop <--전에 김영한 강의 것.

JPA구조

bookService.java에
bookRepository를 DI하고, 거기에 CRUD를 만듬.

bookController.java에
RestAPI로 리턴해준 역할.

	@CrossOrigin // CORS오류 피하기위해(.js요청되는 것 막는 것 푸는 것). BookController 바로 직전에 적용됨.
	@PostMapping("/book")
	public ResponseEntity<?> save(@RequestBody Book book){
		//ResponseEntity<>가 bookService.저장하기(book)가 Book타입이므로, 생략하면 Book타입으로 리턴함.
		System.out.println("title :"+book.getTitle());
		System.out.println("author :"+book.getAuthor());
		return new ResponseEntity<>(bookService.저장하기(book), HttpStatus.OK);
	}

-------------------
구글에 자바 제네릭 ? 란 로 검색.