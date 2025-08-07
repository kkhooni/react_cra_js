import React, { useState } from "react";

//폼 제어 컴포넌트. 
//1. 입력 필드와 상태 관리
//useState를 사용하여 입력 필드의 값을 상태로 관리한다. 
function ControlledForm(){
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted Name: ${name}`);// 폼 제출의 기본 동작(페이지 새로고침)을 방지
    }
    //폼 값에 대한 관리를 위에서 한다. 
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name: <input type="text" value={name} onChange={handleChange} />
            </label>
        </form>
    );
}

//export default ControlledForm;

//2. 다중 입력 필드 관리
function MultiInputForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value }); // 상태 업데이트
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

//3. <textarea>
function TextAreaExample() {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <form>
      <label>
        Message:
        <textarea value={message} onChange={handleChange} />
      </label>
      <p>Typed Message: {message}</p>
    </form>
  );
}

//4. <select>
//React의 <select>는 valeu 속성을 통해 선택된 값을 제어한다. 
function SelectExample() {
  const [fruit, setFruit] = useState("apple");

  const handleChange = (event) => {
    setFruit(event.target.value);
  };

  return (
    <form>
      <label>
        Pick your favorite fruit:
        <select value={fruit} onChange={handleChange}>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="cherry">Cherry</option>
        </select>
      </label>
      <p>Selected Fruit: {fruit}</p>
    </form>
  );
}

//5. 체크박스와 라디오 버튼
//checked 속성을 사용해 상태로 관리
function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <form>
      <label>
        Accept Terms:
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
      </label>
      <p>{isChecked ? "Accepted" : "Not Accepted"}</p>
    </form>
  );
}

//6. 라디오 버튼
function RadioExample() {
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <form>
      <label>
        Male:
        <input
          type="radio"
          name="gender"
          value="male"
          checked={selected === "male"}
          onChange={handleChange}
        />
      </label>
      <label>
        Female:
        <input
          type="radio"
          name="gender"
          value="female"
          checked={selected === "female"}
          onChange={handleChange}
        />
      </label>
      <p>Selected Gender: {selected}</p>
    </form>
  );
}