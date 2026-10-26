import "./App.css";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <div className="main_parent">
      <div className="app">
        <Header />

        <TodoInput />
        <TodoList></TodoList>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/admin" element={<AdminPanel />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
