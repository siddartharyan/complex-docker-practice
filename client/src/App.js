import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";
function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" component={Fib} />
          <Route path="/other" component={OtherPage} />
        </Routes>
    </Router>
  );
}

export default App;
