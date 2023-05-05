import React from 'react'

const Pantalla = () => {
  return (
    <div className='text-2xl'>
      <form 
          className='bg-gray-100'
          >
          <input 
            type="text" 
            name="" 
            id="" 
            disabled 
            className='w-full bg-transparent text-right text-black placeholder:text-black' 
            placeholder='0' 
          />
      </form>
      <p 
        className='w-full bg-gray-100 text-right text-black'
          >
            0
      </p>
    </div>
  )
}

export default Pantalla