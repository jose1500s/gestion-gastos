import { useState } from 'react';
import { Button, Modal } from 'flowbite-react';

export default function ModalResetApp({ setPresupuesto, setGastos, setIsValidPresupuesto, isDarkMode }) {
    const [openModal, setOpenModal] = useState(false);

    const resetearApp = () => {
        localStorage.removeItem('gastos')
        localStorage.removeItem('presupuesto')
        setPresupuesto(0)
        setGastos([])
        setIsValidPresupuesto(false)
    }

    return (
        <div className='absolute z-10 right-0 top-0 m-2'>
            <button onClick={() => setOpenModal(true)} className='cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 21 21">
                    <g fill="none" fillRule="evenodd" stroke={`${isDarkMode ? '#fff' : '#000'}`} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3.578 6.487A8 8 0 1 1 2.5 10.5" /><path d="M7.5 6.5h-4v-4" />
                    </g>
                </svg>
            </button>
            <Modal
                show={openModal}
                onClose={() => setOpenModal(false)}
                position={'top-center'}
            >
                <Modal.Header>Resetear Presupuesto</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Al resetear el presupuesto, se borraran todos los gastos existentes, al igual que se pedira un nuevo presupuesto y la aplicación iniciara de zero.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={resetearApp}>Resetear</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}