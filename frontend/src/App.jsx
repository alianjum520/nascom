import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    const fetchBackend = async()=>{
      const resp  = await fetch("http://127.0.0.1:8000/accounts/api/register/",{
        method:"POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          username: "1234",
          email:"huzaifa@123.com",
          first_name:"Huzaifa",
          last_name: "Saleem",
          password: "huzaifa123",
          password2:"huzaifa123"
      }),


     }
            )
            const data = await resp.json()
console.log(data)

          }

useEffect(()=>{
  fetchBackend().catch(console.error)
},[])

  return (
    <>
    <div>

    </div>
    </>
  )
}

export default App
