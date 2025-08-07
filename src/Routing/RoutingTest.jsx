import React from "react";
import { BrowserRouter, Routes, Route , Link, useParams, useNavigate} from "react-router-dom";

function Home(){
    return <h1>Home page</h1>
}

//useNavigate Hook을 사용하여 버튼 클릭 시 경로를 변경할 수 있다. 
function Home2() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate("/about")}>Go to About</button>
    </div>
  );
}
function About(){
    return <h1>About Page</h1>
}
//동작으로 라우팅하여 값을 전달한다.
function Product() {
  const { id } = useParams(); // URL의 id 파라미터 가져오기
  return <h1>Product ID: {id}</h1>;
}

//기본 라우팅 설정
/*
function RouteMain(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}*/

//네비게이션 추가
function RouteMain() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RouteMain;