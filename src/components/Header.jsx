import NuevoPresupuesto from "./nuevoPresupuesto"

export default function Header() {
    return (
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white">
            <header className="flex flex-col justify-center items-center h-full gap-10">
                <h1
                    class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl text-center"
                >
                    Gestiona Tu Presupuesto

                    <span class="sm:block"> De Manera Sencilla. </span>
                </h1>
                <NuevoPresupuesto />
            </header>
        </div>
    )
}