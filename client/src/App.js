import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Record from "./component/Record";
import Notfound from "./component/Notfound";
import Menu from "./component/Menu";
import Search from "./component/Search";
import Chart from "./component/Chart";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/record" element={<Record />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}
export default App;
