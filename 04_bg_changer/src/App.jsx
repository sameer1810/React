import {useState} from "react"

function App() {
  const [color,setColor] = useState("olive")

  return (
    
      <div className="w-full h-screen duration-200"
      style={{backgroundColor : color}}>

    <div className="fixed flex flex-wrap 
    justify-center bottom-12 inset-x-0 px-2"> 
      <div className="flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=> setColor("Black")}//onClick only expects fn that os why we can't directally use setcolor we have to use call back fn
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "Black"}}>
            Black
          </button>

          <button
          onClick={()=> setColor("Pink")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "Pink"}}>
            Pink
          </button>

          <button
          onClick={()=> setColor("Blue")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "Blue"}}>
            Blue
          </button>

          <button
          onClick={()=> setColor("Brown")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "Brown"}}>
            Brown
          </button>

          <button
          onClick={()=> setColor("Grey")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "Grey"}}>
            Grey
          </button>
          
        </div>
      </div>
    </div>

     
  )
}

export default App
