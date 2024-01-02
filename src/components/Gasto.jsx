import netflixLogo from '../assets/img/netflix.png';
export default function Gasto({ gasto }) {

    const formatearCantidad = cantidad => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const formatearFecha = fecha => {
        const fechaFormateada = new Date(fecha)
        return fechaFormateada.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        })
    }

    return (
        <div className="w-full max-h-24 flex items-center mt-3 bg-slate-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm
            p-3
        ">
            <img src={netflixLogo} alt="netflix" className="w-10 h-10" />

            <div className='flex flex-col w-40 ml-2 max-[640px]:ml-0 justify-start items-center text-center'>
                <p className="text-white text-base max-[640px]:text-sm font-bold">{gasto.nombre}</p>
                <p className="text-white text-sm max-[640px]:text-xs">{formatearFecha(gasto.fecha)}</p>
            </div>

            <div className='flex justify-end items-center w-full'>
                <p className="text-white text-xl max-[640px]:text-base font-bold text-center">-{formatearCantidad(gasto.cantidad)}
                    <br />
                    <span className='font-semibold text-base max-[640px]:text-sm'>{gasto.categoria}</span>
                </p>
            </div>
            
        </div>
    )
}