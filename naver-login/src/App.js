import logo from './logo.svg';
import './App.css';
import Login from './Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserInfo from './UserInfo';
//html 파일이 1개밖에 없는 React 에서는 
//Router를 이용해서 각 js 파일의 경로 설정을 해줘야함
//BrowserRouter = Router : 웹에 전체적인 경로
//Switch -> Routes: 경로들
//Route  : 경로
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}  />
        <Route path='/userinfo' element={<UserInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
