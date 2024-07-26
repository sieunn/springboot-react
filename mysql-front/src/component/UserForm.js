import React,{useState} from "react";

const UserForm = ({addUser}) => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); //잠시 제출 방지
        addUser({name,email});
        setName(''); //input에 작성한 내용 작성후 초기화
        setEmail(''); //input에 작성한 내용 작성후 초기화
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>이름 : </label>
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} required/>
                </div>
                <div>
                    <label>이메일 : </label>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                </div>
                <button type="submit">유저 추가하기</button>
            </form>
        </div>
    )
}
export default UserForm;