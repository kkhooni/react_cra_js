import React from "react"; // React 라이브러리를 가져옵니다.
import Book from "./Book"; // 현재 디렉토리의 'Book.jsx' 파일로부터 'Book' 컴포넌트를 가져옵니다.

function Library(props){ // 'Library'라는 이름의 함수형 컴포넌트를 정의합니다.
    return ( // 컴포넌트가 렌더링할 내용을 반환합니다.
        <div>
            {/* 'Book' 컴포넌트를 사용합니다. 이때 'name'과 'numOfPage'라는 'props'를 전달합니다. */}
            <Book name="처음 만난 파이썬" numOfPage={300} /> {/* 첫 번째 Book 컴포넌트 인스턴스 */}
            <Book name="처음 만난 AWS" numOfPage={400} />     {/* 두 번째 Book 컴포넌트 인스턴스 */}
            <Book name="처음 만난 리액트" numOfPage={500} />   {/* 세 번째 Book 컴포넌트 인스턴스 */}
        </div>
    )
}

export default Library; // 'Library' 컴포넌트를 이 파일의 기본 내보내기로 설정합니다.

/*
<Book name="처음 만난 파이썬" numOfPage={300} /> 
위와 같이 호출하면 Book 함수는 props 객체({ name: "처음 만난 파이썬", numOfPage: 300 })를 인수로 받게 됩니다.
*/


