export default function ControlPresupuesto({ presupuesto }) {

    const formatearPresupuesto = presupuesto => {
        return presupuesto.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return(
        <>
            <h2 className="text-5xl text-white">
                presupuesto: {formatearPresupuesto(presupuesto)}
            </h2>
        </>
    )
}