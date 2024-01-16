import { useState, useEffect } from "react"
import NuevoPresupuesto from "./NuevoPresupuesto.jsx"
import ControlPresupuesto from "./ControlPresupuesto"
import HoraLocal from "./HoraLocal"
import { Button } from "@tremor/react";
import darkModeIcon from '../assets/img/darkMode.svg'
import lightModeIcon from '../assets/img/sunMode.svg'

export default function Header({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto }) {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const darkMode = () => {
        document.body.classList.toggle('dark');
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        setIsDarkMode(document.body.classList.contains('dark'));
    }, []);


    return (
        <header id="header" className="w-4/5 max-[640px]:w-full m-auto min-h-full  max-[640px]:p-3 ">
            <section className="flex justify-between max-[640px]:px-1  items-center w-full mb-2">
                <h1 className="text-white text-3xl max-[640px]:text-lg font-semibold">Bienvenido</h1>
                <HoraLocal />
                <Button size="md" onClick={darkMode} className={isDarkMode ?
                    'bg-gradient-to-r from-gray-700 to-slate-800 border-none'
                    : 'bg-gradient-to-br from-slate-300 to-indigo-50 border-none'
                }
                >
                    {isDarkMode ? (
                        <img src={darkModeIcon} alt="Light Mode" className="w-6 h-6 max-[640px]:w-5 max-[640px]:h-5" />
                    ) : (
                        <img src={lightModeIcon} alt="Dark Mode" className="w-6 h-6 max-[640px]:w-5 max-[640px]:h-5" />
                    )}
                </Button>
            </section>
            {isValidPresupuesto ? (
                <ControlPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    isDarkMode={isDarkMode}
                    setIsValidPresupuesto={setIsValidPresupuesto}
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