import '../nuevoPresupuesto.css'
import { toast } from 'sonner'
import { NumberInput } from "@tremor/react";
import { CurrencyDollarIcon } from "@heroicons/react/outline";


export default function NuevoPresupuesto({ presupuesto, setPresupuesto, setIsValidPresupuesto }) {

    const handlePresupuesto = (e) => {
        e.preventDefault()
        if (!presupuesto || presupuesto < 0) {
            toast.error('Presupuesto no valido')
            return
        }

        setIsValidPresupuesto(true)

    }

    return (
        <div className='mt-32'>
            <div className="card">
                <div className="tools">
                    <div className="circle">
                        <span className="red box"></span>
                    </div>
                    <div className="circle">
                        <span className="yellow box"></span>
                    </div>
                    <div className="circle">
                        <span className="green box"></span>
                    </div>
                </div>
                <div className="card__content">
                    <form onSubmit={handlePresupuesto} className='w-3/6 max-[640px]:w-4/5'>
                        <div className="form__group field">
                            <NumberInput 
                            type="number"
                            icon={CurrencyDollarIcon} placeholder="Presupuesto..."
                                onChange={(e) => setPresupuesto(Number(e.target.value))}
                            />
                        </div>
                        <input
                            type="submit" value="Añadir"
                            className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-cyan-500 active:text-indigo-500 transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring mt-10 w-full cursor-pointer text-center"
                        >
                        </input>
                    </form>
                </div>
            </div>
        </div>
    )
}