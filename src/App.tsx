import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Game } from "./components/Game";
import { Landing } from "./components/Landing";

function App() {
  return (
    <>
      <RecoilRoot>
        <Router>
          <Routes>
            <Route path="/" element={<Landing/>}></Route>
            <Route path="/Game" element={<Game/>}></Route>
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;
