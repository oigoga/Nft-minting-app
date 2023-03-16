import { useState } from "react"
import Mainmint from './Mainmint';
import Navbar from './Navbar'

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
   <>
   <div className="flex flex-col items-center bg-gray-light text-gray-dark h-screen font-Crisis ">
   <Navbar accounts={accounts} setAccounts={setAccounts}/>
  <Mainmint accounts={accounts} setAccounts={setAccounts}/>
   </div>
  
   </>
  )
}

export default App
