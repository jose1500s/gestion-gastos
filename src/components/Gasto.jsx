export default function Gasto({ gasto }) {
    return(
        <>
            <h2 className="text-white text-xl">{gasto.nombre}</h2>
            <h2 className="text-white text-xl">{gasto.categoria}</h2>
            <h2 className="text-white text-xl">{gasto.cantidad}</h2>
        </>
    )
}