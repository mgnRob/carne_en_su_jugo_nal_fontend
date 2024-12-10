
import { Link } from "react-router-dom"
import type { CartItem, Menu } from "../types"

type CartProps = {
    cart: CartItem[]
    removeFromCart: (id: Menu['id']) => void
    decreaseQuantity: (id: Menu['id']) => void
    increaseQuantity: (id: Menu['id']) => void
    clearCart: () => void
    isEmpty: boolean
    cartTotal: number
}

export default function Cart({
    cart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    cartTotal
}: CartProps) {
    return (
        <>

            <div className="py-5">

                <nav className="mt-5 justify-center">
                    <div className="container">
                        <div id="carrito" className="bg-slate-100 p-3">
                            {isEmpty ? (
                                <p className="text-center"><p className="rounded-full bg-cyan-500 text-md text-slate-900 w-6">X</p>no hay pedido</p>
                            ) : (
                                <>
                                    <table className="w-auto table">
                                        <thead>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Cantidad</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map(menu => (
                                                <tr key={menu.id}>
                                                    <td>
                                                        <img
                                                            className="max-w-10"
                                                            src={`/img/${menu.image}.webp`}
                                                            alt="imagen menu"
                                                        />
                                                    </td>
                                                    <td>{menu.name}</td>
                                                    <td className="">
                                                        ${menu.price}
                                                    </td>
                                                    <td className="flex flex-initial w-6">
                                                        <button
                                                            type="button"
                                                            className="text-3xl bg-slate-950 text-slate-300"
                                                            onClick={() => decreaseQuantity(menu.id)}
                                                        >
                                                            -
                                                        </button>
                                                        {menu.quantity}
                                                        <button
                                                            type="button"
                                                            className="text-3xl bg-slate-950 text-slate-300"
                                                            onClick={() => increaseQuantity(menu.id)}
                                                        >
                                                            +
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="rounded-full bg-red-500 text-md text-slate-900 w-6 "
                                                            type="button"
                                                            onClick={() => removeFromCart(menu.id)}
                                                        >
                                                            X
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    <p className="text-end">Total pagar: <span className="text-wrap">${cartTotal}</span></p>
                                </>
                            )}

                            <button
                                className="bg-slate-500 text-slate-100 w-100 mt-3 p-1 rounded-lg hover:bg-slate-400 hover:text-slate-950"
                                onClick={clearCart}
                            >Eliminar pedido </button>
                            <Link to="/menu/pedido">
                                <button className="ms-3  bg-slate-500 text-slate-100 w-100 mt-3 p-1 rounded-lg hover:bg-slate-400 hover:text-slate-950">Tomar pedido</button>
                            </Link>

                        </div>
                    </div>
                </nav>
            </div >
        </>
    )
}


