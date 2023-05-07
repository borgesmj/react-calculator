import Teclado from './Components/Teclado'
import Pantalla from './Components/Pantalla'
import { useState } from 'react'
import './App.css'
import GithubButton from './Components/GithubButton'

function App() {

  const [expression, setExpression] = useState('')
  const [answer, setAnswer] = useState(0)

  return (
    <div>
      <div className='bg-black'>
        <GithubButton/>
      </div>
      <div>
      <div className='w-full lg:w-2/5 py-4 xl:w-1/4 bg-white rounded-lg m-auto shadow-xl shadow-gray-300'>
      <p className='text-center bg-transparent text-xl'>Calculator</p>
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
                setAnswer={setAnswer}
            />
        </div>
    </div>
      </div>
    </div>
    
  )
}

export default App
