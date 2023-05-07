import React from 'react'

const Pantalla = ({answer, setAnswer, expression, setExpression}) => {
  return (
    <div className=''>
      <form 
          className='bg-gray-100'
          >
          <input 
            type="text" 
            name="" 
            id="" 
            disabled 
            className='w-full bg-transparent text-right text-black placeholder:text-black text-xl' 
            placeholder='0'
            value={expression} 
          />
          <input 
            type="text" 
            name="" 
            id="display" 
            disabled 
            className='w-full bg-transparent text-right text-black placeholder:text-black text-3xl' 
            placeholder='0'
            value={answer} 
          />
      </form>
    </div>
  )
}

export default Pantalla