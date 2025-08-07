import React from "react";
/**
 * 1. 이벤트 핸들러 추가하기
 */
/*
- 이벤트 핸들러란 사용자의 마우스 클릭이나 키보드 동작, 사용자 입력 포커스 등과 같은 이벤트가 발생했을 때 그 처리를 담당하는
  실행 함수를 가리킨다. 
- React에서는 이러한 이벤트 핸들러를 JSX 코드 내에 작성하여 추가함으로써 해당 이벤트를 처리할 수 있다. 
*/
/*
- React 이벤트 핸들러 이름 에시
  const handleClick = () => {
    // onClick 이벤트를 처리하는 코드
  }
  const handleMouseEnter = () => {
    // onMouseEnter 이벤트를 처리하는 코드
  } 
- 인라인 방식으로 이벤트 핸들러 선언과 동시데 전달할 수도 있다. 
    // 일반 함수
    <button onClick={function handleClick() {
       alert("버튼을 클릭했습니다!");
    }}>

    // 화살표 함수
    <button onClick={() => {
       alert("버튼을 클릭했습니다!");
    }}>    
- 잘못된 사용
    // 해당 페이지가 렌더링될 때마다 즉시 호출됨! -> 버튼 클릭시 호출되는것이 아니고 바로 호출됨. -> handleClick만 써야한다. () 괄호 사용하면 안됨.
    <button onClick={handleClick()}> 확인 </button>  
*/

//간단한 대화상자 띄우는 예제
const EventHandling = () => {
  const handleClick = () => {
    alert("버튼을 클릭했습니다!");
  };

  return <button onClick={handleClick}>클릭하세요!</button>;
};

//export default EventHandling; //default로 export하면 페이지당 하나만 사용해야 한다. 대신 호출하는 쪽에서는 import를 수정없이 사용 가능. 이름이 EventHandling이 아니더라도 인식함.

/**
 * 2. 이벤트 핸들러에서 props 참조하기
 */
const ControlButton = ({ message, children }) => {
  return <button onClick={() => alert(message)}>{children}</button>;
};

const ControlPanel2 = () => {
  return (
    <>
      <ControlButton message="음악을 재생합니다.">▶ Play</ControlButton>
      <ControlButton message="재생을 중지합니다.">▣ Stop</ControlButton>
    </>
  );
};

//export default ControlPanel2;

/**
 * 3. 이벤트 핸들러를 props로 전달하기
 */
//부모 컴포넌트에서 자식 컴포넌트의 이벤트 핸들러를 동적으로 명시해야 할 경우가 생길 수 있습니다. 
// 그럴 경우에는 다음 예제처럼 부모 컴포넌트로부터 전달 받은 props를 그대로 이벤트 핸들러에 전달하면  된다.

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

const PlayButton = ({ musicName }) => {
  const handlePlayClick = () => {
    alert(`${musicName}을 재생합니다.`);
  };

  return <Button onClick={handlePlayClick}>▶ Play "{musicName}"</Button>;
};

const StopButton = () => {
  return <Button onClick={() => alert("재생을 중지합니다.")}>▣ Stop</Button>;
};

const ControlPanel = () => {
  return (
    <>
      <PlayButton musicName="TRUST" />
      <StopButton />
    </>
  );
};

export default ControlPanel;