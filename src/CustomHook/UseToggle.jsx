import React from "react";
//import useToggle from "./useToggle";
import useToggle from "./Toggle";

function UseToggle() {
  const [isOn, toggleIsOn] = useToggle(false);// 1. 커스텀 훅 호출

  return (
    <div>
      <p>The light is {isOn ? "On" : "Off"}</p>
      {/* 버튼을 클릭하면 Toggle.jsx의  toggle()함수가 실행되고, 상태정의에 있는 setValue를 실행해서 값을 변경시킨다. value가 변경되면 컴포넌트가 다시 렌더링되어 On/Off가 바뀜.*/}
      <button onClick={toggleIsOn}>Toggle Light</button>
    </div>
  );
}

export default UseToggle;