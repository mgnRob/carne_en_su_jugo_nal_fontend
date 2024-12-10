import { Link } from "react-router-dom";


export default function Gracias() {
    return (
        <>
            <div className=" content-center shadow-2xl m-10 text-center rounded-lg ">
                <h1 className="text-slate-900 text-4xl">
                    Gracias por tu compra
                </h1>
                <h3>
                    En seguida le entregamos su pedido
                </h3>

                <div className="m-5 text-white text-3xl">
                    <button  className=" p-2 bg-blue-500 border-t-stone-800 rounded-lg shadow-md">
                        <Link to="/">
                            Volver al inicio
                        </Link>

                    </button>


                </div>

            </div>
        </>
    )
}
