import React from "react";

function FAQList() {
  const data = [
    { q: "배송은 얼마나 걸리나요?", a: "평균 2~3일 소요됩니다." },
    { q: "환불은 어떻게 하나요?", a: "고객센터로 문의해 주세요." },
  ];

  return (
    <>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <dt>{item.q}</dt>
          <dd>{item.a}</dd>
        </React.Fragment>
      ))}
    </>
  );
}

export default function FragmentTest() {
  return (
    <dl>
      <FAQList />
    </dl>
  );
}