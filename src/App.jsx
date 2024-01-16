import { useState, useEffect } from 'react'
import Header from './components/Header'
import './index.css'
import { Toaster, toast } from 'sonner'

function App() {

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  )
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    const presupuestoLocalStorage = Number(localStorage.getItem('presupuesto')) ?? 0

    if(presupuestoLocalStorage > 0) {
      setIsValidPresupuesto(true)
    }
  }, [])

  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      <Toaster position="top-center" richColors closeButton />
    </>
  )
}

export default App
