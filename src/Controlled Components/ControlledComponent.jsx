import React, { useState } from "react";

function ControlledForm(){
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted Name: ${name}`);// 폼 제출의 기본 동작(페이지 새로고침)을 방지
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name: <input type="text" value={name} onChange={handleChange} />
            </label>
        </form>
    );
}