import { Navigate, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Authors from "./components/Authors";
import NewAuthor from "./components/NewAuthor";
import EditAuthor from "./components/EditAuthor";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/authors" />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/authors/new" element={<NewAuthor />} />
          <Route path="/authors/:id/edit" element={<EditAuthor />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
