import { useState, useEffect } from 'react'
import { Card, Text, Metric, DonutChart, Title } from "@tremor/react";
import ModalNuevoGasto from "./ModalNuevoGasto";
import ListadoGastos from './ListadoGastos';
import { toast } from 'sonner'
import ModalResetApp from './ModalResetApp';
import ModalAgrearPresupuesto from './ModalAgregarPresupuesto';

export default function ControlPresupuesto({ presupuesto, setPresupuesto, isDarkMode, setIsValidPresupuesto }) {

    const [gastos, setGastos] = useState(
        localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
    )
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    const [gastoEditar, setGastoEditar] = useState({})
    const [openModalEditar, setOpenModalEditar] = useState(false);
    const [filtro, setFiltro] = useState([])
    const [gastosFiltrados, setGastosFiltrados] = useState([])
    const [deposito, setDeposito] = useState(0)

    useEffect(() => {
        if (Object.keys(gastoEditar).length) {
            setOpenModalEditar(true);
        }
    }, [gastoEditar])

    useEffect(() => {
        setPresupuesto(presupuesto + deposito)
        setDisponible(disponible + deposito)
    }, [deposito])

    useEffect(() => {
        localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
    }, [gastos])

    useEffect(() => {
        if (filtro) {
            const gastosFiltrados = gastos.filter(gasto => filtro.includes(gasto.categoria))
            setGastosFiltrados(gastosFiltrados)
        }
    }, [filtro])

    useEffect(() => {
        const gastado = gastos.reduce((acc, gasto) => acc + gasto.cantidad, 0)
        setGastado(gastado)
        const disponible = presupuesto - gastado
        setDisponible(disponible)
    }, [gastos])

    const getTotalCategories = (categoria) => {
        // Filtrar los gastos por categoría
        const gastosCategoria = gastos.filter(gasto => gasto.categoria === categoria);

        // Sumar los montos de los gastos filtrados
        const totalCategoria = gastosCategoria.reduce((acc, gasto) => acc + gasto.cantidad, 0);

        return totalCategoria;
    };


    const categories = [
        {
            name: "Comida",
            sales: getTotalCategories('Comida')
        },
        {
            name: "Ahorro",
            sales: getTotalCategories('Ahorro')
        },
        {
            name: "Casa",
            sales: getTotalCategories('Casa')
        },
        {
            name: "Automovil",
            sales: getTotalCategories('Automovil')
        },
        {
            name: "Ocio",
            sales: getTotalCategories('Ocio')
        },
        {
            name: "Automovil",
            sales: getTotalCategories('Automovil')
        },
        {
            name: "Salud",
            sales: getTotalCategories('Salud')
        },
        {
            name: "Suscripciones",
            sales: getTotalCategories('Suscripciones')
        },
        {
            name: "Compras en linea",
            sales: getTotalCategories('ComprasEnLinea')
        },
        {
            name: "Videojuegos",
            sales: getTotalCategories('Videojuegos')
        },
        {
            name: "Regalos",
            sales: getTotalCategories('Regalos')
        },
        {
            name: "Ropa",
            sales: getTotalCategories('Ropa')
        },
        {
            name: "Gasto General",
            sales: getTotalCategories('General')
        },
    ];

    const valueFormatter = (number) => `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

    const formatearPresupuesto = presupuesto => {
        return presupuesto.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const guardarGasto = gasto => {
        if (gasto.id) {
            const gastosActualizados = gastos.map(g => g.id === gasto.id ? gasto : g)
            setGastos(gastosActualizados)
            setGastoEditar({})
            toast.success('Gasto editado correctamente')
        } else {
            gasto.id = generarId()
            gasto.fecha = Date.now();
            setGastos([...gastos, gasto])
            toast.success('Gasto agregado correctamente')
        }
    }

    const eliminarGasto = id => {
        const gastosActualizados = gastos.filter(gasto => gasto.id !== id);
        setGastos(gastosActualizados)
    }

    return (
        <>
            <section id="resumen" className="w-full p-5  h-auto rounded-lg
            bg-gradient-to-br from-slate-300 to-indigo-50
                dark:bg-gradient-to-r dark:from-gray-700 dark:to-slate-800
            ">
                <div className="flex justify-between items-center gap-2">
                    <div>
                        <h2 className="text-2xl max-[640px]:text-[1.1rem] text-slate-900 dark:text-white font-semibold ">Resumen General</h2>
                    </div>
                    <div>
                        <ModalNuevoGasto
                            guardarGasto={guardarGasto}
                            openModalEditar={openModalEditar}
                            setOpenModalEditar={setOpenModalEditar}
                            setGastoEditar={setGastoEditar}
                            gastoEditar={gastoEditar}
                        />
                    </div>
                </div>
                <section className="flex justify-between flex-wrap  items-center pt-8">
                    <Card className="lg:max-w-xs m-1">
                        <Text>Presupuesto</Text>
                        <Metric className="pt-1">{formatearPresupuesto(presupuesto)}</Metric>
                        <ModalResetApp
                            setPresupuesto={setPresupuesto}
                            setGastos={setGastos}
                            setIsValidPresupuesto={setIsValidPresupuesto}
                            isDarkMode={isDarkMode}
                        />
                        <ModalAgrearPresupuesto
                            isDarkMode={isDarkMode}
                            deposito={deposito}
                            setDeposito={setDeposito}
                        />
                    </Card>

                    <Card className="lg:max-w-xs m-1">
                        <Text>Disponible</Text>
                        <Metric className={`${disponible < 0 ? 'pt-1 text-red-600' : 'pt-1 text-slate-900'}`}>{formatearPresupuesto(disponible)}</Metric>
                    </Card>

                    <Card className="lg:max-w-xs m-1">
                        <Text>Gastado</Text>
                        <Metric className="pt-1">{formatearPresupuesto(gastado)}</Metric>
                    </Card>
                </section>
            </section>

            <div className='md:flex md:gap-3  w-full'>
                <main className='max-[640px]:w-full w-5/6 mt-2'>
                    <ListadoGastos
                        gastos={gastos}
                        setGastoEditar={setGastoEditar}
                        eliminarGasto={eliminarGasto}
                        filtro={filtro}
                        setFiltro={setFiltro}
                        gastosFiltrados={gastosFiltrados}
                    />
                    <span className='hidden' />
                </main>
                <section className="w-full h-[560px] lg:w-3/12 p-5 mt-2 rounded-lg
                bg-gradient-to-br from-slate-300 to-indigo-50
                dark:bg-gradient-to-r dark:from-gray-700 dark:to-slate-800
                ">
                    <Card className="max-w-lg">
                        <Title>Desgloce:</Title>
                        <DonutChart
                            className="mt-6"
                            data={categories}
                            category="sales"
                            index="name"
                            valueFormatter={valueFormatter}
                            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
                        />
                    </Card>
                </section>
            </div>
        </>
    )
}