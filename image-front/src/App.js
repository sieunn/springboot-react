import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Board from './component/Board';
import Profile from './component/Profile';
import Header from './component/layout/Headers';
import Main from './component/Main';
import Footer from './component/layout/Footer';
import Banner from './component/layout/Banner';
//frontend api url 설정
//-> react router dom Router

//Board path = "/board"
//Profile path ="/profile"
function App () {

    return (
        <div>
            <Router>
            <Banner/>
            <Header />
                <Routes> 
                    <Route path='/main' element={<Main/>}/>
                    <Route path='/board' element={<Board/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    )

}
export default App;