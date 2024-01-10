import NuevoPresupuesto from "./NuevoPresupuesto.jsx"
import ControlPresupuesto from "./ControlPresupuesto"
import HoraLocal from "./HoraLocal"
export default function Header({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto }) {

  

    return (
        <header id="header" className="w-4/5 max-[640px]:w-full m-auto min-h-full  max-[640px]:p-3 ">
            <section className="flex justify-between max-[640px]:px-1 items-center w-full mb-2">
                <div>
                    <h1 className="text-white text-3xl max-[640px]:text-xl font-semibold">Bienvenido
                        <br />
                        <span className="text-lg">Gestiona tu presupuesto fácilmente</span>
                    </h1>
                </div>
                <HoraLocal />
            </section>
            {isValidPresupuesto ? (
                <ControlPresupuesto
                    presupuesto={presupuesto}
                />
            ) :
                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            }


        </header>
    )
}