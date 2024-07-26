import React from 'react';

/*
const 컴포넌트명 = () => { }
-- 어떤 값도 받지 않고, 단독으로 기능을 진행할 때 사용
-- 특정 상태나 갑을 다른 곳에서 전달받고, 전달받은 값에 의해 변화가 필요하지 않은 경우 사용

const 컴포넌트명 = ({특정값}) => { }
-- 특정값의 영향을 받아 기능이 변화할 때 사용
const UserTable = ({name}) => {
    return (
        <>
        <div>Hello, {name} !</div>
        </>
    )
}
*/
//UserTable 컴포넌트는 사이트에 회원가입한 유저들의 정보를 보는 공간
//App.js 에서 전달받은 User값들을 받아와 유저 정보를 보여줄 것
const UserTable = ({users,deleteUser}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user =>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={()=>deleteUser(user.id)}>유저 삭제하기</button>
                        </td>
                        <td>
                            <button>정보 수정하기</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default UserTable;