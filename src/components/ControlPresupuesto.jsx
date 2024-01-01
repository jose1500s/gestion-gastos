import { Card, Text, Metric, DonutChart, Title, Button } from "@tremor/react";
import ModalNuevoGasto from "./ModalNuevoGasto";

export default function ControlPresupuesto({ presupuesto }) {
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

    return (
        <div className="w-5/6 flex gap-5">
            <section id="resumen" className="w-9/12 p-5 h-56 bg-slate-800 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm ">
                <header className="flex justify-between">
                    <div>
                        <h2 className="text-2xl text-white font-semibold ">Resumen General</h2>
                    </div>
                    <div>
                        <ModalNuevoGasto />
                    </div>
                </header>
                <section className="flex justify-between items-center pt-8">
                    <Card className="max-w-xs">
                        <Text>Presupuesto</Text>
                        <Metric className="pt-1">{formatearPresupuesto(presupuesto)}</Metric>
                    </Card>

                    <Card className="max-w-xs">
                        <Text>Disponible</Text>
                        <Metric className="pt-1">$ 200.00</Metric>
                    </Card>

                    <Card className="max-w-xs">
                        <Text>Gastado</Text>
                        <Metric className="pt-1">$ 300,00</Metric>
                    </Card>
                </section>
            </section>

            <section className="w-3/12 p-5 bg-slate-800 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm">
                <Card className="max-w-lg">
                    <Title>Gastos:</Title>
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
    )
}