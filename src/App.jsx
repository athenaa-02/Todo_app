import "./App.css";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="app">
      <Header />

      <TodoInput />
      <TodoList></TodoList>
    </div>
  );
}

export default App;
