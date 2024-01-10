import Gasto from "./Gasto"

export default function ListadoGastos({ gastos }) {
    return (
        <>
            <h1 className="text-white text-2xl text-left mb-3">{gastos.length ? 'Gastos' : 'Sin gastos'}</h1>
            {gastos.map(gasto => (
                <Gasto 
                    key={gasto.id}
                    gasto={gasto}
                />
            ))}

        </>
    )
}