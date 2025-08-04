//여러개의 댓글 컴포넌트를 포함하고 있는 댓글 목록 컴포넌트
import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이인제",
        comment: "안녕하세요. 소플입니다.",
    },
    {
        name: "유제석",
        comment: "리액트는 재미있어요",
    },
    {
        name: "강민경",
        comment: "저도 리액트를 배워 보고 싶어요.",
    },
];

function CommentList(props){
    return (
        <div>
            {
                comments.map((comment) => {
                    return (
                        <Comment name={comment.name} comment={comment.comment} />
                    );
                })
            }
        </div>
    );
}

export default CommentList;

//index.js에 추가해서 화면에 레더링