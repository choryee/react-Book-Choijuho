import React, { useState } from 'react';


//230219
// 리액트 한글 강의
// https://react.vlpt.us/basic/08-manage-input.html


const Home2=()=> {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {

    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 각각을 추출
    console.log('e.target.value>>>', e.target.value);
    console.log('e.target.name>>>', e.target.name);

    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name] : value // name 키(e.target.name의 name과 비슷)를 가진 값(그것은 name)을 value={name}의 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    })
  };


  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default Home2;