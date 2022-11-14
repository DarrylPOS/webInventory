import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/Home";
import Notfound from "./component/Notfound";
import Good from "./component/good/Good";
import Login from "./component/Login";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/good" element={<Good />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
