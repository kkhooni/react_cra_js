import React from "react"; // React 라이브러리를 가져와서 JSX 문법을 사용할 수 있게 합니다.

function Book(props){ // 'Book'이라는 이름의 함수형 컴포넌트를 정의합니다. 'props'는 부모 컴포넌트로부터 전달받을 속성(데이터)을 담는 객체입니다.
    return ( // 컴포넌트가 렌더링할 내용을 반환합니다. JSX 문법으로 작성됩니다.
        // 최상위 JSX 엘리먼트는 항상 하나의 부모 엘리먼트로 감싸져야 합니다. 여기서는 <div>를 사용했습니다.
        <div> 
            {/* props.name을 사용하여 부모로부터 전달받은 책의 이름을 표시합니다. 중괄호 {}는 JSX 내부에서 JavaScript 표현식을 사용할 때 사용합니다. */}
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1> 
            {/* props.numOfPage를 사용하여 부모로부터 전달받은 페이지 수를 표시합니다. */}
            <h2>{`이 책은 총 ${props.numOfPage}페이지로 이뤄저 있습니다.`}</h2> 
        </div>
    );
}
// 'Book' 컴포넌트를 이 파일의 기본 내보내기(default export)로 설정하여 다른 파일에서 'import Book from "./Book";'과 같이 가져와 사용할 수 있게 합니다.
export default Book; 