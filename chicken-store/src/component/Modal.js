import React from "react";
import '../css/Modal.css';

//버튼을 열거나 닫을 때 동작
const Modal = ({isOpen, onCloes, children}) => {
    //isOpen 이 false이면 아래 return() 을 보지 않고
    //함수 종료 시킴
    if(!isOpen){
        return null; //아래 return() 에 있는 html 태그를 보여주지 않고 돌려보냄
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onCloes}>
                    &times; 
                </button>
                {children}
            </div>
        </div>
    )
}
export default Modal;