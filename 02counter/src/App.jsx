import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App()
{

  let [counter, setCounter] = useState(10)//here 10 os default value
  //counter is variable, setCounter is fn name which will do the operation 

  const addValue = ()=>{
    counter = counter+1;
    if(counter>20)
    { 
      alert("no possible")
      counter =20;
      setCounter(20);
    }
    else{
      setCounter(counter);
    }

    /*  
    !-----INTERVIEW SCENARIO------!

    WHAT WILL HAPPEN IF?

    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)

    O/P-> ABOVE THREE LINE WILL NOT INCREASE COUNTER BY 3 INSTEAD IT ONLY INCREASE THE COUNTER BY 1 
        ie -> if counter = 2 then after this counter = 3 not counter=5
        because we are usinf useState which conduts opereation in batches because of fibre algo.

    
  WHAT IF WE HAVE TO INCREASE COUNTER BY 3 ONLY??

    setCounter(precounter => precounter+1)
    setCounter(precounter => precounter+1)
    setCounter(precounter => precounter+1)


    here precounter is just a var which holds the prev value of counter 
    precounter gives the existing state
    setcounter gives us a callback
      ie-> setCounter(()=>{})
        also be used as
          setCounter(=>)
      also see above example
      

     */
  }

  const removeValue =()=>{
    counter = counter-1;
    if(counter<0)
    { 
      alert("no possible")
      counter=0;
      setCounter(0);

    }
    else{
      setCounter(counter);
    }
    
  }

/*function App() {
  
  let counter = 15

  //funtion to increase val.
  const addValue = ()=>{
    counter = counter+1;
    console.log("val:", counter);
    //value is increasing of counter in console but not in UI
  }
*/
  return (
    <>
      <h1> Counter App</h1>
      <h2> Counter value : {counter}</h2>

      <button
      onClick={addValue}>Add value</button>
      <br/>
      <button
      onClick ={removeValue}>Remove Value</button>
    </>
  )
}

export default App
