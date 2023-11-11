import Home from "./pages/home/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

function App() {
  

  return (
    <div >
      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
