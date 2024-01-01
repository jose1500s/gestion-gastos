import NuevoPresupuesto from "./nuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

export default function Header({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto }) {
    return (
            <header className="flex flex-col pt-3  items-center h-screen gap-10 bg-gradient-to-b from-gray-900 to-gray-600 ">
                <h1
                    className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-[2.85rem] text-center"
                >
                    Gestiona Tu Presupuesto

                    <span className="sm:block"> De Manera Sencilla. </span>
                </h1>

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