import { useState, useEffect } from 'react'
import { Button, Modal } from 'flowbite-react';
import { TextInput, NumberInput, SearchSelect, SearchSelectItem } from "@tremor/react";
import { CurrencyDollarIcon } from '@heroicons/react/outline'
import { toast } from 'sonner'

export default function ModalNuevoGasto({ guardarGasto, openModalEditar, gastoEditar, setOpenModalEditar, setGastoEditar }) {
    const [openModal, setOpenModal] = useState(false);
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [id, setId] = useState('')
    const [fecha, setFecha] = useState('')

    useEffect(() => {
        if (openModalEditar) {
            setOpenModal(true)
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    }, [openModalEditar])


    const handleSubmit = e => {
        e.preventDefault()
        if ([cantidad, nombre, categoria].includes('')) {
            toast.error('Todos los campos son obligatorios')
            return;
        }
        if (cantidad <= 0) {
            toast.error('Cantidad no valida')
            return;
        } else {
            guardarGasto({ nombre, cantidad, categoria, id, fecha })
            setId('')
        }
        setOpenModal(false)
        setOpenModalEditar(false)
        setNombre('')
        setCantidad('')
        setCategoria('')
    }
    const closeModal = () => {
        setOpenModal(false)
        setOpenModalEditar(false)
        setNombre('')
        setCantidad('')
        setCategoria('')
        setGastoEditar({})
    }
    return (
        <>
            <Button onClick={() => setOpenModal(true)} className='max-[640px]:h-9'>Nuevo Gasto +</Button>
            <Modal show={openModal} onClose={closeModal}>
                <Modal.Header>{openModalEditar ? 'Editar Gasto' : 'Nuevo Gasto'}</Modal.Header>
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
                            typeof='number'
                            icon={CurrencyDollarIcon}
                            id='cantidad'
                            placeholder="Ej. 5000"
                            value={cantidad}
                            onValueChange={setCantidad}
                        />

                        <label htmlFor="categoria" >Categoria:</label>
                        <SearchSelect
                            type='text'
                            typeof='select'
                            id='categoria'
                            value={categoria}
                            onValueChange={setCategoria}
                        >
                            <SearchSelectItem value='Ahorro'>Ahorro</SearchSelectItem>
                            <SearchSelectItem value='Comida'>Comida</SearchSelectItem>
                            <SearchSelectItem value='Casa'>Casa</SearchSelectItem>
                            <SearchSelectItem value='Automovil'>Automovil</SearchSelectItem>
                            <SearchSelectItem value='Ocio'>Ocio</SearchSelectItem>
                            <SearchSelectItem value='Salud'>Salud</SearchSelectItem>
                            <SearchSelectItem value='Suscripciones'>Suscripciones</SearchSelectItem>
                            <SearchSelectItem value='ComprasEnLinea'>Compras en linea</SearchSelectItem>
                            <SearchSelectItem value='Videojuegos'>Videojuegos</SearchSelectItem>
                            <SearchSelectItem value='Regalos'>Regalos</SearchSelectItem>
                            <SearchSelectItem value='Ropa'>Ropa</SearchSelectItem>
                            <SearchSelectItem value='General'>Gasto General</SearchSelectItem>
                        </SearchSelect>

                        <Button className='mt-4 w-1/3 mx-auto' type='submit'>{openModalEditar ? 'Editar' : 'Guardar'}</Button>
                    </form>

                </Modal.Body>
            </Modal>
        </>
    )
}