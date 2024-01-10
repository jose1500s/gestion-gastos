import { useState, useEffect } from 'react'
import { Card, Text, Metric, DonutChart, Title, Button } from "@tremor/react";
import ModalNuevoGasto from "./ModalNuevoGasto";
import ListadoGastos from './ListadoGastos';
import { toast } from 'sonner'
export default function ControlPresupuesto({ presupuesto }) {

    const [gastos, setGastos] = useState([])
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const gastado = gastos.reduce((acc, gasto) => acc + gasto.cantidad, 0)
        setGastado(gastado)
        const disponible = presupuesto - gastado
        setDisponible(disponible)
    }, [gastos])

    const cities = [
        {
            name: "New York",
            sales: 9800,
        },
        {
            name: "London",
            sales: 4567,
        },
        {
            name: "Hong Kong",
            sales: 3908,
        },
    ];

    const valueFormatter = (number) => `$ 300`
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
        gasto.id = generarId()
        gasto.fecha = Date.now();
        setGastos([...gastos, gasto])
        toast.success('Gasto agregado correctamente')
    }

    return (
        <>
            <section id="resumen" className="w-full p-5  h-auto bg-slate-800 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm ">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl max-[640px]:text-xl text-white font-semibold ">Resumen General</h2>
                    </div>
                    <div>
                        <ModalNuevoGasto
                            guardarGasto={guardarGasto}
                        />
                    </div>
                </div>
                <section className="flex justify-between flex-wrap  items-center pt-8">
                    <Card className="lg:max-w-xs m-1">
                        <Text>Presupuesto</Text>
                        <Metric className="pt-1">{formatearPresupuesto(presupuesto)}</Metric>
                    </Card>

                    <Card className="lg:max-w-xs m-1">
                        <Text>Disponible</Text>
                        <Metric className="pt-1">{formatearPresupuesto(disponible)}</Metric>
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
                    />
                    <span className='hidden' />
                </main>
                <section className="w-full h-[560px] lg:w-3/12 p-5 mt-2 bg-slate-800 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm">
                    <Card className="max-w-lg">
                        <Title>Desgloce:</Title>
                        <DonutChart
                            className="mt-6"
                            data={cities}
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