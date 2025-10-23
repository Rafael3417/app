import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "./TableNew";
import PokemonDetail from "./PokemonDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

