import React, { useState } from 'react';
import axios from 'axios';

function App({posts = []}) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState([]);

    const Java에업로드 = () => {
        //Form 특정 값을 가져와서 넘겨줄때 사용하는 객체
        //files에서 파일이 하나가 아니라 여러개이기 때문에 여러개를 담을 배열 설정
        //forEach = 향상된 for문
        const formData = new FormData();
        Array.from(files).forEach(file => {
           //return formData.append("files",file); -> forEach문만 return 생략가능
           formData.append("files",file);
        });
        formData.append("title", title);
        formData.append("content", content);

        //자바 컨트롤러에 데이터 전송! post이용
        axios.post("/gallery/upload",formData,{
            headers:{
                //전송할 데이터에 글자가 아닌 파일이 함께 전송된다. 머릿말로 알려주기
                'Content-Type':'multipart/form-data'
            }
        });
        alert("자바로 이미지 전송했습니다.");
    }

    return (
        <div className="App">
                <div>
                    <label>제목:</label>
                    <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>내용:</label>
                    <textarea value={content} onChange={(e)=>setContent(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='a'>이미지선택:</label>
                    <input multiple type="file" className='img-input' id='a'
                    onChange={(e) => setFiles(e.target.files)}
                    />
                </div>
                <button onClick={Java에업로드}>Submit</button>

                <div>
                {posts.map((post) => (
                    <div key={post.id}  >
                        <h2> {post.title}</h2>
                        <p> {post.content}</p>
                        <img
                        src={post.imageUrl}
                        />
                    </div>
                    ))}
                </div>
        </div>    
    );
}

export default App;