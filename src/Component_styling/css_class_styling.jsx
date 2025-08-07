
/**
 * CSS 클래스를 활용한 스타일링 : 기존의 CSS 스타일링 방식
 */
/*
- React 컴포넌트에 스타일을  적용하는 가장 간단한 방버은 inline 스타일을 적용하는것이다. 
  HTML 태그 안에 인라인 스타일을 적용하는 것과 마찬가지로 syle을 이용해 React 엘리먼트에 인라인 스타일을 바로 적용할 수 있다. 
  아래 소스와 같다. 
  단점은 인라인 스타일을 적용할 때 style 속성값으로 일반 문자열이 아닌 자바스크립트 객체를 할당해야만 하고 css 속성명은 카멜 표기법으로 바꿔 작성해야 한다. 
*/
/*const appStyle = {
  textAlign: "left"
};

const headerStyle = {
  backgroundColor: "black",
  color: "yellow",
  textAlign: "center"
};

const titleStyle = {
  textDecoration: "underline",
  textShadow: "4px 1px #9c9c9c"
};

const CssStyled = () => {
  return (
    <div style={appStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Hello, React!</h1>
      </header>
      <p>React 스타일링 수업에 잘 오셨습니다!</p>
    </div>
  );
};

export default CssStyled;*/

/*
위와 같이 인라인으로 사용하지 말고 별도의 파일에 스타일을 정의해 놓고 사용하라.
*/

/*import "./styles.css";

const CssStyled = () => {
  return (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Hello React.</h1>
        </header>
        <p>React 스타일링 수업에 잘 오셨습니다!</p>
    </div>
  );
};*/

import "./styles2.css";

const CssStyled = () => {
  return (
    <div className="App">
        <header>
            <h1>Hello, React!</h1>
        </header>
        <p>React 스타일링 수업에 잘 오셨습니다!</p>
    </div>
  );
};

export default CssStyled;