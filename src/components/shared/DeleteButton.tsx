import React from 'react'

type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

interface DeleteButtonProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,  
  id: number,  
}

export default function DeleteButton({ setTodos, id }: DeleteButtonProps) {
  return (
    <button onClick={(e) => {
      e.stopPropagation();
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }}>
      ❌
    </button>
  )
}
