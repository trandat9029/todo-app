
import { Todo } from '../../App'
import DeleteButton from '../shared/DeleteButton'

type TodoListProps = {
  todos: Todo[],
  handleDeleteTodo: (id : number) => void,
  handleToggleTodo: (id : number) => void,
}

export default function TodoList({todos, handleToggleTodo, handleDeleteTodo} : TodoListProps) {

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
                
                <DeleteButton id={todo.id} handleDeleteTodo={handleDeleteTodo} />
              </li>
            ))
          }
        </ul>
    </>
  )
}
