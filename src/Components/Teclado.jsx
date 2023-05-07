import React from 'react'

const Teclado = ({answer, setAnswer, expression, setExpression}) => {
  
  const keyboard = [
    {id: 'seven', content: '7'},
    {id: 'eight', content: '8'},
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
    {id: 'equals', content: '='},
    {id: 'add', content: '+'},
    {id: 'clear', content: 'C'},
  ]

  const numRegex =/^[1-9]$/;
  const clearRegex = /C/
  const opRegex = /[+\-*/]/g
  const dotRegex = /\./g
  const equalRegex = /=/g
  const zeroRegex = /0/g


  const handleButtonClick = (content) => {
    //Set the clear button
    if (clearRegex.test(content)){
      setExpression('');
      setAnswer('');
      return
    }
    //Set the number button
    if (numRegex.test(content)){
      setAnswer(answer + content);
      setExpression(expression + content)
    }
    //set the operator
    if (opRegex.test(content)){
      const str = expression
      const last = str.charAt(str.length - 1);
      if (last === '='){
        setExpression(answer + content)
        setAnswer(content)
      } else {
        setExpression(expression + content)
        setAnswer(content)
      }
    }
    // Handle decimal point
    if (dotRegex.test(content)){
      if (answer.includes(".")) {
        return;
      } else {
        setAnswer(answer + content)
        setExpression(expression + content)
      }
    }
    // Handle zero rule
    if (zeroRegex.test(content)){
      const str = expression
      const last = str.charAt(str.length - 1);
      if (answer === '') {
        return;
      } else if (opRegex.test(last)){
        return
      } else {
          setAnswer(answer + content)
          setExpression(expression + content)
        }
      }
    //set the equal operation
    if (equalRegex.test(content)){
      setExpression(expression + content)
      const answer = eval(expression);
      setAnswer(answer.toString());
    }
    
    console.log(content)
  }
 
  return (
    <div className=''>
            {keyboard.map((button, index) => (
                <button 
                  key={index} 
                  id={button.id} 
                  className={`bg-gray-100 text-2xl p-5 text-black hover:bg-gray-300
                  ${numRegex.test(button.content) ? 'bg-red-100' : ''}
                  ${numRegex.test(button.content) ? 'hover:bg-red-400' : ''}
                  ${clearRegex.test(button.content) ? 'w-full' : 'w-1/4'}
                  ${opRegex.test(button.content) ? 'bg-indigo-100' : ''}
                  ${opRegex.test(button.content) ? 'hover:bg-indigo-400' : ''}
                  ${equalRegex.test(button.content) ? 'bg-orange-100' : ''}
                  ${equalRegex.test(button.content) ? 'hover:bg-orange-400' : ''}
                  `}
                  onClick={() => handleButtonClick(button.content)}
                >
                    {button.content}
                </button>
            ))}
         </div>
  )
}

export default Teclado