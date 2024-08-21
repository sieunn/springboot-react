import React,{useState, useEffect} from "react";
import axios from "axios";
import '../css/ChickenForm.css';

const ChickenForm = () => {

    const [chickenName, setchickenName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice]= useState("");

    const 전달데이터 = {
        chickenName,
        description,
        price
    }

    //스프링부터 연결 후 전달
    const 제출버튼 = () => {
        axios.post("http://localhost:9090/api/chicken", 전달데이터)
        .then((response) => {
            //데이터 무사히 전달했을 경우
            alert("메뉴가 성공적으로 등록되었습니다.");
        })
        .catch((e)=> {
            alert("메뉴 등록에 실패했습니다.");
        });
    }


    return(
        
        <div className="chickenform-container">
            <label>메뉴 이름: <br/>
                <input type="text" value={chickenName} onChange={(e)=>setchickenName(e.target.value)}/>
            </label>
            <label>메뉴 설명: <br/>
                <textarea value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </label>
            <label>가격: <br/>
                <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </label>
            <button className="submit-button" onClick={제출버튼}>등록하기</button>
        </div>
    )

}
export default ChickenForm;