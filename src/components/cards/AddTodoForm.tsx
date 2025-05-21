import {useState } from 'react'
import Button from '../shared/Button'
import { useTodosContext } from '../../lib/hooks';


export default function AddTodoForm() {

  const [todoText, setTodoText] = useState('');
  const { handleAddTodo } = useTodosContext();

  return (
    <>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleAddTodo(todoText);
          setTodoText("");
        }} >
            <h2 className='font-medium text-[#231d15]'>Add a todo</h2>
            <input 
              type='text' 
              value={todoText}
              onChange={(e) => {setTodoText(e.target.value)}}  
              className='h-[45px] border border-black/[12%] rounded-[5px] my-2 text-sm block w-full px-4'/>
            <Button >Add to list</Button>
        </form>
    </>
  )
}
