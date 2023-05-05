import Teclado from './Components/Teclado'
import Pantalla from './Components/Pantalla'
import { useState } from 'react'
import './App.css'

function App() {

  const [expression, setExpression] = useState('id')
  const [answer, setAnswer] = useState(0)

  return (
    <div className='bg-red-600 flex flex-col m-auto w-full md:w-2/5 xl:w-1/5'>
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
  )
}

export default App
