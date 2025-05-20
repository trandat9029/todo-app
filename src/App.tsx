import Footer from "./components/elements/Footer"
import Header from "./components/elements/Header"
import BGHeading from "./components/elements/BGHeading"
import TodoList from "./components/sections/TodoList"
import Sidebar from "./components/sections/Sidebar"
import { useState } from "react"

export type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
}

function App() {
  //state
  const [todos, setTodos] = useState<Todo[]>([]);
 
  //derived state 
  const totalNumberOfTodos = todos.length;
  const numberOfCompletedTodos = todos.filter((todo) => todo.isCompleted).length;

  // event handle / actions
  const handleAddTodo = (todoText: string) => {
    if(todos.length >= 3){
      alert('Log in to add move than 3 todos');
      return;
    }else{
      setTodos(prev => [
        ...prev,
        {
          id: prev.length + 1,
          text: todoText,
          isCompleted: false,
        },
      ]);
    }
  }

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if(todo.id === id){
          return {...todo, isCompleted: !todo.isCompleted};
        }
        return todo;
      })
    );
  }

  const handleDeleteTodo = (id: number) =>{
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center font-sans bg-body min-h-screen ">
        <BGHeading/>

        {/* main */}
        <main className="relative w-[972px] h-[636px] bg-white rounded-lg 
                        shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] 
                        grid-rows-[59px_1fr] overflow-hidden"
        >
          <Header totalNumberOfTodos={totalNumberOfTodos} numberOfCompletedTodos={numberOfCompletedTodos}  />
          
          <TodoList 
            todos={todos} 
            handleToggleTodo={handleToggleTodo} 
            handleDeleteTodo={handleDeleteTodo}  
          />

          <Sidebar  handleAddTodo={handleAddTodo} />
        </main>


        {/* footer */}
        <Footer/>

      </div>
    </>
  )
}

export default App
