import { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { NumberInput } from "@tremor/react";
import { CurrencyDollarIcon } from '@heroicons/react/outline'
import { toast } from 'sonner'

export default function ModalAgrearPresupuesto({
    isDarkMode,
    setPresupuesto,
    setDisponible,
    presupuesto,
    disponible,
    depositos,
    setDepositos
}) {

    const [openModal, setOpenModal] = useState(false);
    
    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const handleAgregarPresupuesto = e => {
        e.preventDefault()
        const cantidad = e.target[0].value
        if (cantidad <= 0) {
            toast.error('Cantidad no valida')
            return;
        } else {
            setPresupuesto(presupuesto + parseInt(cantidad))
            setDisponible(disponible + parseInt(cantidad))

            const deposito = {
                id: generarId(),
                cantidad: parseInt(cantidad),
                fecha: Date.now()
            }

            setDepositos([...depositos, deposito])

            toast.success('Presupuesto agregado')
        }
        setOpenModal(false)
    }


    return (
        <div id='asdsdasd' className='absolute z-10 right-[35px]  top-0 m-1'>
            <button onClick={() => setOpenModal(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill={`${isDarkMode ? '#fff' : '#000'}`} d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" /></svg>
            </button>
            <Modal
                show={openModal}
                onClose={() => setOpenModal(false)}
                position={'center'}
                size={"sm"}
            >

                <Modal.Body>
                    <form
                        className='w-full mt-3'
                        onSubmit={handleAgregarPresupuesto}
                    >
                        <NumberInput
                            icon={CurrencyDollarIcon}
                            placeholder="Cantidad a agregar..."
                        />
                        <Button
                            type='submit'
                            className='w-3/4 m-auto mt-3'
                        >Agregar</Button>
                        <button
                            id='asdasda'
                            className='absolute right-0 top-0'
                            onClick={() => setOpenModal(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="m8.054 16.673l-.727-.727L11.273 12L7.327 8.079l.727-.727L12 11.298l3.921-3.946l.727.727L12.702 12l3.946 3.946l-.727.727L12 12.727z" /></svg>
                        </button>
                    </form>
                </Modal.Body>

            </Modal>
        </div>
    )
}