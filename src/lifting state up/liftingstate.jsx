import React, {useState} from "react"; //useState 사용시 필요.

//State 끌어올리기
function LifingState() {
  const [text, setText] = useState("");

  return (//변경된 text를 ChildB에 알림.
    <div>
      <ChildA value={text} onChange={setText} />
      <ChildB value={text} />
    </div>
  );
}

function ChildA({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={e => onChange(e.target.value)} //값이 변경되면 부모에게 알림.
      placeholder="입력하세요"
    />
  );
}

function ChildB({ value }) {
  return <p>입력된 값: {value}</p>;
}

export default LifingState;