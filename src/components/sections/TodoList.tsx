
import DeleteButton from '../shared/DeleteButton'

type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

interface TodoProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


export default function TodoList({todos, setTodos}: TodoProps ) {

  return (
    <>
        <ul>
          {
            todos.map((todo) => (
              <li 
                key={todo.id} 
                className='flex justify-between items-center px-8 h-12 text-sm cursor-pointer border-b border-black/[8%]'
                onClick={() => {
                  setTodos(
                    todos.map((t) => {
                      if(t.id === todo.id){
                        return {...t, isCompleted: !t.isCompleted};
                      }
                      return t;
                    })
                  );
                }}
              > 
                <span className={`${todo.isCompleted ? 'line-through text-[#ccc]' : ''}`}>
                  {todo.text}
                </span>
                
                <DeleteButton id={todo.id} setTodos={setTodos} />
              </li>
            ))
          }
        </ul>
    </>
  )
}
