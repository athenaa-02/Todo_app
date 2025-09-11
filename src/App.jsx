import './App.css'
import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'

function App() {
return (
    <div className="App">
      <Header />
      <TodoInput />
      <TodoList />
      <TodoItem />
    </div>
  )
}

export default App
