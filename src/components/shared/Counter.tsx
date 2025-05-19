import React from 'react'

type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

interface TodoProps {
  todos: Todo[];
}

export default function Counter({todos} : TodoProps) {
  return (
    <>
        <p>
            <b>
              {todos.filter((todo) => todo.isCompleted).length}
            </b> / {todos.length} todos completed
        </p>
    </>
  )
}
