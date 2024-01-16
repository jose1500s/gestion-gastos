import Gasto from "./Gasto"
import { Tooltip } from 'flowbite-react';
import Filtros from "./Filtros.jsx"

export default function ListadoGastos({ gastos, setGastoEditar, eliminarGasto, filtro, setFiltro, gastosFiltrados }) {
    
    return (
        <>
            <div className="flex items-center gap-3">

                <Tooltip content="Aqui podras ver todos los gastos que has realizado, para eliminar o editar un gasto desliza hacia la izquierda o derecha sobre el gasto que deseas editar o eliminar."
                    animation="duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="#fff" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412l-1 4.705c-.07.34.029.533.304.533c.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598c-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081l.082-.381l2.29-.287zM8 5.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2" /></svg>
                </Tooltip>
                <Filtros
                    filtro={filtro}
                    setFiltro={setFiltro}
                />
            </div>

            {
                filtro.length ? (
                    <>
                        <h2 className="text-white text-2xl text-left mb-3 mt-3">{gastosFiltrados.length ? 'Gastos' : 'Sin gastos de esa categoria'}</h2>
                        {
                            gastosFiltrados.map(gasto => (
                                <Gasto
                                    key={gasto.id}
                                    gasto={gasto}
                                    setGastoEditar={setGastoEditar}
                                    eliminarGasto={eliminarGasto}
                                />
                            ))
                        }
                    </>
                ) : (
                    <>
                     <h2 className="text-white text-2xl text-left mb-3 mt-3">{gastos.length ? 'Gastos' : 'Sin gastos'}</h2>
                        {
                            gastos.map(gasto => (
                                <Gasto
                                    key={gasto.id}
                                    gasto={gasto}
                                    setGastoEditar={setGastoEditar}
                                    eliminarGasto={eliminarGasto}
                                />
                            ))
                        }
                    </>

                )
            }

        </>
    )
}