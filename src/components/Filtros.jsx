import { useState } from "react";
import { MultiSelect, MultiSelectItem } from "@tremor/react";

export default function Filtros({ filtro, setFiltro }) {
 
    return (
        <>
            <form>
                <MultiSelect
                    type='text'
                    typeof='select'
                    value={filtro}
                    onValueChange={setFiltro}
                    id='categoria'
                    placeholder="Filtrar por..."
                >
                    <MultiSelectItem value='Comida'>Comida</MultiSelectItem>
                    <MultiSelectItem value='Ahorro'>Ahorro</MultiSelectItem>
                    <MultiSelectItem value='Casa'>Casa</MultiSelectItem>
                    <MultiSelectItem value='Automovil'>Automovil</MultiSelectItem>
                    <MultiSelectItem value='Ocio'>Ocio</MultiSelectItem>
                    <MultiSelectItem value='Salud'>Salud</MultiSelectItem>
                    <MultiSelectItem value='Suscripciones'>Suscripciones</MultiSelectItem>
                    <MultiSelectItem value='ComprasEnLinea'>Compras en linea</MultiSelectItem>
                    <MultiSelectItem value='Videojuegos'>Videojuegos</MultiSelectItem>
                    <MultiSelectItem value='Regalos'>Regalos</MultiSelectItem>
                    <MultiSelectItem value='Ropa'>Ropa</MultiSelectItem>
                    <MultiSelectItem value='General'>Gasto General</MultiSelectItem>
                </MultiSelect>
            </form>
        </>
    )
}