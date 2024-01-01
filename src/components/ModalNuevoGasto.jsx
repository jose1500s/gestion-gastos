import { useState } from 'react'
import { Button, Modal } from 'flowbite-react';
import { TextInput, NumberInput, SearchSelect, SearchSelectItem } from "@tremor/react";
import { CurrencyDollarIcon } from '@heroicons/react/outline'
import { toast } from 'sonner'

export default function ModalNuevoGasto() {

    const [openModal, setOpenModal] = useState(false);
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if ([cantidad, nombre, categoria].includes('')) {
            toast.error('Todos los campos son obligatorios')
            return;
        }
    }

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Nuevo Gasto +</Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Nuevo Gasto</Modal.Header>
                <Modal.Body className='text-white'>
                    <form className='w-full'
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="nombre">Nombre:</label>
                        <TextInput
                            type='text'
                            id='nombre'
                            placeholder="Ej. Comida"
                            value={nombre}
                            onValueChange={setNombre}
                        />

                        <label htmlFor="cantidad" >Cantidad:</label>
                        <NumberInput
                            type='number'
                            icon={CurrencyDollarIcon}
                            id='cantidad'
                            placeholder="Ej. 5000"
                            value={cantidad}
                            onValueChange={setCantidad}
                        />

                        <label htmlFor="categoria" >Categoria:</label>
                        <SearchSelect
                            id='categoria'
                            value={categoria}
                            onValueChange={setCategoria}
                        >
                            <SearchSelectItem value='Ahorro'>Ahorro</SearchSelectItem>
                            <SearchSelectItem value='Comida'>Comida</SearchSelectItem>
                            <SearchSelectItem value='Casa'>Casa</SearchSelectItem>
                            <SearchSelectItem value='Automovil'>Automovil</SearchSelectItem>
                            <SearchSelectItem value='General'>Gasto General</SearchSelectItem>
                            <SearchSelectItem value='Ocio'>Ocio</SearchSelectItem>
                            <SearchSelectItem value='Salud'>Salud</SearchSelectItem>
                            <SearchSelectItem value='Suscripciones'>Suscripciones</SearchSelectItem>
                        </SearchSelect>

                        <Button className='mt-4 w-1/3 mx-auto' type='submit'>Agregar</Button>
                    </form>

                </Modal.Body>
            </Modal>
        </>
    )
}