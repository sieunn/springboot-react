import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChickenList from "./component/ChickenList";
import ChicenDetail from "./component/ChickenDetail";
/*
ChickenList path = "/"

ChickenDetail.js path="/chicken-detail"
*/
function App() {
    return(
  <Router>
    <Routes>
      <Route path="/" element={<ChickenList />} />
      <Route path="/chicken-detail/:id" element={<ChicenDetail />} />
    </Routes>
  </Router>
    )
}
export default App;
