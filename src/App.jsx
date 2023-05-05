import Teclado from './Components/Teclado'
import Pantalla from './Components/Pantalla'
import { useState } from 'react'
import './App.css'

function App() {

  const [expression, setExpression] = useState('id')
  const [answer, setAnswer] = useState(0)

  return (
    <div className='w-full lg:w-2/5 xl:w-1/4 bg-red-500 rounded-lg m-auto shadow-xl shadow-gray-300'>
        <div className='flex flex-col  w-4/5  m-auto'>
            <Pantalla
                expression={expression}
                setExpression={setExpression}
                answer={answer}
                setAnser={setAnswer}
            />
            <Teclado
                expression={expression}
                setExpression={setExpression}
                answer={answer}
                setAnser={setAnswer}
            />
        </div>
    </div>
    
  )
}

export default App
