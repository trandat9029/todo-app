
import { useKindeAuth } from '@kinde-oss/kinde-auth-react'
import AddTodoForm from '../cards/AddTodoForm'
import Button from '../shared/Button'

export default function Sidebar() {
    const {login, register, logout, isAuthenticated, isLoading,user} = useKindeAuth();

    return (
        <>
            <section className=" flex flex-col col-[2/3] row-[2/3] bg-main border-l border-black/[0.08] px-6 pt-4 pb-7">
                <AddTodoForm />

                <div className='mt-auto space-y-2'>

                    {
                        isLoading ? null :  isAuthenticated ? (
                            <>
                                <p className='text-sm'>Logged in as {user?.email}</p>
                                <Button onClick={logout} buttonType='secondary' >Logout</Button>
                            </>
                            
                        ) : (
                            <>
                                <Button onClick={login} buttonType='secondary' >Login</Button>
                                <Button onClick={register} buttonType='secondary' >Register</Button>
                            </>
                                
                        )
                    }

                    
                </div>

            </section>
        </>
    )
}
