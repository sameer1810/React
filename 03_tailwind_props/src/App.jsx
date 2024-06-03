import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-pink-400 text-blue p-5 rounded-xl mb-4'>Tailwind test</h1>
    <Card username="chaiaurcode" btnText="click me"/> 
    <Card username="hitesh" btnText="view more"/>
    <Card username="Sam"/>

    </>
  )
}

export default App
