import { useState } from 'react'
import { Card, Text, Metric, DonutChart, Title, Button } from "@tremor/react";
import ModalNuevoGasto from "./ModalNuevoGasto";
import ListadoGastos from './ListadoGastos';

export default function ControlPresupuesto({ presupuesto }) {

    const [gastos, setGastos] = useState([])

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
    }

    return (
        <>
            <div className="md:w-full px-6 md:flex gap-5">
                <section id="resumen" className="w-full p-5 lg:w-9/12  h-auto bg-slate-800 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm ">
                    <header className="flex justify-between">
                        <div>
                            <h2 className="text-2xl text-white font-semibold ">Resumen General</h2>
                        </div>
                        <div>
                            <ModalNuevoGasto
                                guardarGasto={guardarGasto}
                            />
                        </div>
                    </header>
                    <section className="flex justify-between flex-wrap  items-center pt-8">
                        <Card className="lg:max-w-xs m-1">
                            <Text>Presupuesto</Text>
                            <Metric className="pt-1">{formatearPresupuesto(presupuesto)}</Metric>
                        </Card>

                        <Card className="lg:max-w-xs m-1">
                            <Text>Disponible</Text>
                            <Metric className="pt-1">$ 200.00</Metric>
                        </Card>

                        <Card className="lg:max-w-xs m-1">
                            <Text>Gastado</Text>
                            <Metric className="pt-1">$ 300,00</Metric>
                        </Card>
                    </section>
                </section>

                <section className="w-full lg:w-3/12 p-5 mt-2 bg-slate-800 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm">
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
            <main className='w-5/6'>
                <div className='w-[73%]'>
                    <ListadoGastos
                        gastos={gastos}
                    />
                </div>
                <span className='hidden'/>
            </main>
        </>
    )
}