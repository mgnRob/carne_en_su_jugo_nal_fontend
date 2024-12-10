import{createBrowserRouter} from 'react-router-dom'

import Layout from './layouts/Layout'
import Home from './views/Home'
import Menu from './views/Menu'
import Inventory from './views/Inventory'
import TomarPedido from './views/TomarPedido'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: "/menu",
                element: <Menu/>
            },
            {
                path: "/inventario",
                element: <Inventory/>,                

            },
            {
                path: "menu/pedido",
                element: <TomarPedido/>
            },
        ]
    }
])