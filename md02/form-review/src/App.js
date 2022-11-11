import { Routes, Route } from "react-router-dom";
import { Form } from "./pages/Form";
import { UserPages } from "./pages/UserPages";
import { TestPage } from "./pages/TestPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/users-pages" element={<UserPages />} />
      <Route path="/test/:id" element={<TestPage />} />
    </Routes>
  );
}

export default App;
