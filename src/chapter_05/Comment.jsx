import React from "react";

//실제 댓글 처럼 보이기 위해 간단한 .css 작성한다. "인라인 스타일" 작성법이다. 
const styles = {
    wrapper: {
        margin: 8,
        padding: 8, 
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer:{
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16, 
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16
    }
}

function Comment(props){
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" style={styles.image} />
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
}

export default Comment; // 'Book' 컴포넌트를 이 파일의 기본 내보내기(default export)로 설정하여 다른 파일에서 'import Book from "./Book";'과 같이 가져와 사용할 수 있게 합니다.