
import './App.css'
import Profile from './components/Profile'
import newLogin from './components/newLogin'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
     <h1>Sameer Mansuri</h1>
     <newLogin/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
