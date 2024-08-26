

/*
is = 주로 true인지 false인지를 나타낼 때 많이 사용
on = 이벤트(e,event) 를 처리하기 위한 함수 이름으로 사용
   = 특정 사건이 발생했을 때 대처할 기능
   = 닫기 사건이 발생 -> 메인에서 특정 기능이 안보이게 닫는다.
*/
// []변수선언, {}외부에서 가져온 값 사용
const Modal = ({isOpen, onClose, children}) => {
    if(!isOpen){ //모달을 열기 전이라면
        return null;//다시 돌려보내기를 이용해서 화면에 들어가기 버튼이 보이지 않도록 설정하는 트릭
    }

    return(
        <div>
            <div>
                <button onClick={onClose}>
                    들어가기
                </button>
            </div>
        </div>
    )
}
export default Modal;