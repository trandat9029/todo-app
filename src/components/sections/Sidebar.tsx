import AddTodoForm from '../cards/AddTodoForm'
import Button from '../shared/Button'

type SidebarProps = {
    handleAddTodo : (todoText: string) => void;
}

export default function Sidebar({ handleAddTodo} : SidebarProps ) {
    return (
        <>
            <section className=" flex flex-col col-[2/3] row-[2/3] bg-main border-l border-black/[0.08] px-6 pt-4 pb-7">
                <AddTodoForm handleAddTodo={handleAddTodo} />

                <div className='mt-auto space-y-2'>
                    <Button buttonType='secondary' >Login</Button>
                    <Button buttonType='secondary' >Register</Button>
                    <button></button>
                </div>

            </section>
        </>
    )
}
