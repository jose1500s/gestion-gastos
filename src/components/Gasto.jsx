import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
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

export default function Gasto({ gasto, setGastoEditar, eliminarGasto }) {

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

    const leadingActions = () => (
        <LeadingActions >
            <SwipeAction onClick={() => setGastoEditar(gasto)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fff" d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-1 2q-.425 0-.712-.288T3 20v-2.425q0-.4.15-.763t.425-.637L16.2 3.575q.3-.275.663-.425t.762-.15q.4 0 .775.15t.65.45L20.425 5q.3.275.437.65T21 6.4q0 .4-.138.763t-.437.662l-12.6 12.6q-.275.275-.638.425t-.762.15zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z" /></svg>
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
            onClick={() => eliminarGasto(gasto.id)}
            destructive={true}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fff" d="M9.808 17h1V8h-1zm3.384 0h1V8h-1zM6 20V6H5V5h4v-.77h6V5h4v1h-1v14z" /></svg>
            </SwipeAction>
        </TrailingActions>
    )


    return (
        <SwipeableList >
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="w-full max-h-24 flex items-center p-3
                 bg-gradient-to-br from-slate-300 to-indigo-50
                 dark:bg-gradient-to-r dark:from-gray-700 dark:to-slate-800
                 ">
                    <img src={diccionarioIconos[gasto.categoria]} alt="netflix" className="max-[640px]:w-16 md:w-20 h-auto" />

                    <div className='flex flex-col w-40 max-[640px]:ml-0 justify-start items-center text-center'>
                        <p className="text-black dark:text-white text-base max-[640px]:text-sm font-bold">{gasto.nombre}</p>
                        <span className=' text-black dark:text-white text-sm max-[640px]:text-xs'>{gasto.categoria}</span>
                    </div>

                    <div className='flex justify-end items-center w-full'>
                        <p className="text-black dark:text-white text-xl max-[640px]:text-base font-bold text-center">-{formatearCantidad(gasto.cantidad)}
                            <br />
                            <span className="font-semibold text-sm max-[640px]:text-sm text-black dark:text-white">{formatearFecha(gasto.fecha)}</span>
                        </p>
                    </div>

                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}