import React from 'react'

const Teclado = () => {
  
  const keyboard = [
    {id: 'seven', content: '7'},
    {id: 'eigth', content: '8'},
    {id: 'nine', content: '9'},
    {id: 'divide', content: '/'},
    {id: 'four', content: '4'},
    {id: 'five', content: '5'},
    {id: 'six', content: '6'},
    {id: 'multiply', content: '*'},
    {id: 'one', content: '1'},
    {id: 'two', content: '2'},
    {id: 'three', content: '3'},
    {id: 'subtract', content: '-'},
    {id: 'zero', content: '0'},
    {id: 'dot', content: '.'},
    {id: 'equal', content: '='},
    {id: 'add', content: '+'},
    {id: 'clear', content: 'C'},
  ]

  const numRegex =/\d+/;
  const clearRegex = /C/
  const opRegex = /[+\-*/]/

  const handleClick = () => {
    console.log('click')
  }
 
  return (
    <div className=''>
            {keyboard.map((item, index) => (
                <button 
                  key={index} 
                  id={item.id} 
                  className={`bg-gray-100 text-2xl p-5 text-black hover:bg-gray-300
                  ${numRegex.test(item.content) ? 'bg-red-100' : ''}
                  ${numRegex.test(item.content) ? 'hover:bg-red-400' : ''}
                  ${clearRegex.test(item.content) ? 'w-full' : 'w-1/4'}
                  ${opRegex.test(item.content) ? 'bg-indigo-100' : ''}
                  ${opRegex.test(item.content) ? 'hover:bg-indigo-400' : ''}
                  `}
                  onClick={handleClick}
                >
                    {item.content}
                </button>
            ))}
         </div>
  )
}

export default Teclado