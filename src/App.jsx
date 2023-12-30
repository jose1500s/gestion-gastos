import { useState } from 'react'
import Header from './components/Header'
import './index.css'
import { Toaster, toast } from 'sonner'

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

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
