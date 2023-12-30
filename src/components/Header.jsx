import NuevoPresupuesto from "./nuevoPresupuesto"

export default function Header({ presupuesto, setPresupuesto }) {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#1c357df7_100%)]">
            <header className="flex flex-col justify-center items-center h-full gap-10">
                <h1
                    className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-[2.85rem] text-center"
                >
                    Gestiona Tu Presupuesto

                    <span className="sm:block"> De Manera Sencilla. </span>
                </h1>
                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                />
            </header>
        </div>
    )
}