import "./App.css";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="main_parent">
    <div className="app">
      <Header />

      <TodoInput />
      <TodoList></TodoList>
    </div>
    </div>
  );
}

export default App;
