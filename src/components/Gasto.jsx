import iconoAhorro from '../assets/img/icono_ahorro.svg'
import iconoComida from '../assets/img/icono_comida.svg'
import iconoCasa from '../assets/img/icono_casa.svg'
import iconoAutomovil from '../assets/img/icono_automovil.svg'
import iconoOcio from '../assets/img/icono_ocio.svg'
import iconoSalud from '../assets/img/icono_salud.svg'
import iconoSuscripciones from '../assets/img/icono_suscripciones.svg'
import iconoComprasEnLinea from '../assets/img/icono_comprasEnLinea.svg'
import iconoVideojuegos from '../assets/img/icono_videojuegos.svg'
import iconoRegalos from '../assets/img/icono_regalos.svg'
import iconoRopa from '../assets/img/icono_ropa.svg'
import iconoGastoGeneral from '../assets/img/icono_gastoGeneral.svg'

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

    const diccionarioIconos = {
        'Ahorro': iconoAhorro,
        'Comida': iconoComida,
        'Casa': iconoCasa,
        'Automovil': iconoAutomovil,
        'Ocio': iconoOcio,
        'Salud': iconoSalud,
        'Suscripciones': iconoSuscripciones,
        'ComprasEnLinea': iconoComprasEnLinea,
        'Videojuegos': iconoVideojuegos,
        'Regalos': iconoRegalos,
        'Ropa': iconoRopa,
        'General': iconoGastoGeneral
    }


    return (
        <div className="w-full max-h-24 flex items-center mt-3 bg-slate-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm p-3 ">
            <img src={diccionarioIconos[gasto.categoria]} alt="netflix" className="max-[640px]:w-16 md:w-20 h-auto" />

            <div className='flex flex-col w-40 max-[640px]:ml-0 justify-start items-center text-center'>
                <p className="text-white text-base max-[640px]:text-sm font-bold">{gasto.nombre}</p>
                <span className=' text-white text-sm max-[640px]:text-xs'>{gasto.categoria}</span>
            </div>

            <div className='flex justify-end items-center w-full'>
                <p className="text-white text-xl max-[640px]:text-base font-bold text-center">-{formatearCantidad(gasto.cantidad)}
                    <br />
                    <p className="font-semibold text-sm max-[640px]:text-sm text-white">{formatearFecha(gasto.fecha)}</p>
                </p>
            </div>

        </div>
    )
}