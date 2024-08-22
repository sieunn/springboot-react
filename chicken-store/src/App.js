import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChickenList from "./component/ChickenList";
import ChicenDetail from "./component/ChickenDetail";
import MainRouter from "./MainRouter.js";
/*
ChickenList path = "/"

ChickenDetail.js path="/chicken-detail"
*/
function App() {
    return(
  <Router>
    <Routes>
      <Route path="/" element={<MainRouter />} />
      {/* Routes 안에는 Route로 설정된 태그만 들어올 수있음   <MainRouter/>*/}
      <Route path="/chicken-detail/:id" element={<ChicenDetail />} />
    </Routes>
  </Router>
    )
}
export default App;
