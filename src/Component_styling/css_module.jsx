//CSS 파일을 컴포넌트 단위로 모듈화하여 사용
//클래스명이 자동으로 유일하게 변환되어 충돌 방지
// 파일 이름에 'module'이 들어가야 css module로 인식된다. -> "파일명.module.css"
import cssmodulestyle from './Button.module.css'; 

function CssButton() {
  return <button className={cssmodulestyle.button}>Click Me1</button>;
}


export default CssButton;