import { useState } from 'react'
import Header from './components/Header'
import './index.css'
import { Toaster, toast } from 'sonner'

function App() {

  const [presupuesto, setPresupuesto] = useState(0)

  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      />
      <Toaster position="top-center" richColors closeButton />
    </>
  )
}

export default App
