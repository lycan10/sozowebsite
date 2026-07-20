import "./App.css";
import Home from "./screens/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Privacy from "./screens/privacy/Privacy";
import Terms from "./screens/terms/Terms";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;