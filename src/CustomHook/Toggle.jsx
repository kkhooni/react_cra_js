import { useState } from "react";

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);//1. 상태정의

  const toggle = () => {
    setValue((prevValue) => !prevValue);//2. 상태 반전
  };

  return [value, toggle]; //3.상태와 토글함수 반환
}

export default useToggle;