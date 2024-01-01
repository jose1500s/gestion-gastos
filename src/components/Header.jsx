import NuevoPresupuesto from "./nuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"
import HoraLocal from "./HoraLocal"
export default function Header({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto }) {

  

    return (
        <header className="flex flex-col pt-3  items-center h-screen h-full gap-10 bg-gradient-to-b from-gray-900 to-gray-600 ">
            <section className="flex justify-between px-6 items-center w-full">
                <div>
                    <h1 className="text-white text-3xl font-semibold">Bienvenido
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