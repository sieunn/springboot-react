import React, { useEffect, useState } from "react";
import axios from "axios";


const Board =() => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const [posts, setPosts] = useState([]);

  const Java에업로드 = () => {
    //Form 특정 값을 가져와서 넘겨줄때 사용하는 객체
    //files에서 파일이 하나가 아니라 여러개이기 때문에 여러개를 담을 배열 설정
    //forEach = 향상된 for문
    const formData = new FormData();
    Array.from(files).forEach((file) => {
      //return formData.append("files",file); -> forEach문만 return 생략가능
      formData.append("files", file);
    });
    formData.append("title", title);
    formData.append("content", content);

    //자바 컨트롤러에 데이터 전송! post이용
    axios.post("/gallery/upload", formData, {
      headers: {
        //전송할 데이터에 글자가 아닌 파일이 함께 전송된다. 머릿말로 알려주기
        "Content-Type": "multipart/form-data",
      },
    });
    alert("자바로 이미지 전송했습니다.");
    //이미지 업로드를 db에 하고나서 업로드 된 이미지를 불러오기
    게시물가져오기();
  };

  //const 기능을 작성해놓고 필요할 때 기능을 사용하기 위해 설정 (버튼 만들때만 만드는거 아님)
  const 게시물가져오기 = () => {
    axios
      .get("http://localhost:9007/posts") //자바컨트롤러 url과 api 주소에서 데이터 가져오기
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      });
  };

  //맨처음 사이트 들어왔을 때 게시물을 바로 가져오게 하고싶어
  useEffect(() => {
    게시물가져오기();
  }, []);

  return (
    <div className="App">
      <div className="form-container">
        <table>
          <tbody>
            <tr>
              <td>
                <label>제목:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>내용:</label>
              </td>
              <td>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="a" className="file-label">이미지선택:
                <input
                  multiple
                  type="file"
                  className="img-input"
                  id="a"
                  onChange={(e) => setFiles(e.target.files)}
                />
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={Java에업로드}>이미지 업로드 버튼</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="post-container">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <table className="post-table">
              {post.title}
              {post.content}
              {post.createdAt}
              {/* 
                         {post.files &&post.files.map(file => () 
                         post.files = 이 파일이 존재할 경우에만 && 뒤에 코드가 실행

                         {post.files &&post.files.map(file => (
                            <img key={file} src={file}/>
                        )) 이 코드는 Array에 대한 배열이 제대로 나오지 않으면 에러가 발생할 가능성이 높음
                         , 의 구분을 따로 설정해야함
                        */}
              {/* 
                        DataBase에 이미지 여러장 저장을 ,로 설정해서 여러장을 저장했기 때문에 
                        , 기준으로 이미지를 가져와야함
                         */}

              <div className="images">
                {post.imageUrl.split(",").map((image) => (
                  <img
                    key={image}
                    src={`http://localhost:9007/images/${image}`}
                  />
                ))}
              </div>
              <button>이미지 수정하기</button>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
