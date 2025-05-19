import Counter from "../shared/Counter"
import Logo from "../shared/Logo"

type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

interface TodoProps {
  todos: Todo[];
}

export default function Header({todos} : TodoProps ){
    return(
        <>
            <header className=" flex justify-between items-center px-7 col-[1/3] row-[1/2] bg-header border-b border-black/[0.08] ">
                <Logo/>

                <Counter todos={todos} />
            </header>
        </>
    )
}