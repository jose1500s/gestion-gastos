import { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { NumberInput } from "@tremor/react";
import { CurrencyDollarIcon } from '@heroicons/react/outline'

export default function ModalAgrearPresupuesto({ isDarkMode }) {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div id='asdsdasd' className='absolute z-10 right-[35px]  top-0 m-1'>
            <button onClick={() => setOpenModal(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill={`${isDarkMode ? '#fff' : '#000'}`} d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"/></svg>
            </button>
            <Modal
                show={openModal}
                onClose={() => setOpenModal(false)}
                position={'center'}
                size={"sm"}
            >

                <Modal.Body>
                    <NumberInput
                        icon={CurrencyDollarIcon}
                        placeholder="Amount..."
                    />
                </Modal.Body>

                <Modal.Footer>
                    <Button>Agregar</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}