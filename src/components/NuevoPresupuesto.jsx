import '../nuevoPresupuesto.css'

export default function NuevoPresupuesto() {
    return (
        <div className="card">
            <div className="tools">
                <div className="circle">
                    <span className="red box"></span>
                </div>
                <div className="circle">
                    <span className="yellow box"></span>
                </div>
                <div className="circle">
                    <span className="green box"></span>
                </div>
            </div>
            <div className="card__content">
                <form >
                    <label>Presupuesto:</label>
                    <input type="text"
                        placeholder="Añade tu presupuesto"
                    />
                    <input type="submit" value="Añadir" />
                </form>
            </div>
        </div>
    )
}