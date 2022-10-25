import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./quiz";
import Layout from "./layout";
import Todo from "./to-do";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="todo" element={<Todo />} />
          <Route path="quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
