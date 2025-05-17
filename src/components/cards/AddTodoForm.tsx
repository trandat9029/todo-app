import React from 'react'
import Input from '../shared/Input'
import Button from '../shared/Button'

export default function AddTodoForm() {
  return (
    <>
        <form >
            <h2 className='font-medium text-[#231d15]'>Add a todo</h2>
            <Input title='Enter a todo' className='h-[45px] border border-black/[12%] rounded-[5px] my-2 text-sm block w-full px-4'/>
            <Button buttonType=''>Add to list</Button>
        </form>
    </>
  )
}
