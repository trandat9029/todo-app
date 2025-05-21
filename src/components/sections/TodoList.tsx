
// import { useContext } from 'react'
import DeleteButton from '../shared/DeleteButton'
// import { TodosContext } from '../../contexts/TodosContextProvider'
import { useTodosContext } from '../../lib/hooks';

export default function TodoList() {

  // const context = useContext(TodosContext);
  // if(!context){
  //   throw new Error("Forgot to add provider");
  // }
  const {todos, handleDeleteTodo, handleToggleTodo} = useTodosContext();

  return (
    <>
        <ul>

          {todos.length === 0 
            && 
              <li className='h-full flex justify-center items-center font-semibold'>Start by adding a todo</li> 
          }

          {
            todos.map((todo) => (
              <li 
                key={todo.id} 
                className='flex justify-between items-center px-8 h-12 text-sm cursor-pointer border-b border-black/[8%]'
                onClick={() => handleToggleTodo(todo.id)}
              > 
                <span className={`${todo.isCompleted ? 'line-through text-[#ccc]' : ''}`}>
                  {todo.text}
                </span>
                
                <DeleteButton id={todo.id} onDeleteTodo={handleDeleteTodo} />
              </li>
            ))
          }
        </ul>
    </>
  )
}
