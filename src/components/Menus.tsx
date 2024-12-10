import type {Menu} from '../types'
import { Link } from "react-router-dom";

type MenuProps = {
  menu : Menu,
  addToCart : (menu: Menu) => void,
 
}
export default function Menus({addToCart, menu} : MenuProps) {

  const {name, image, description, price } = menu

 
  return (

<div className=" m-1 max-w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link to="/pedir">
        <img className="rounded-t-lg" src={`./img/${image}.webp`} alt="img"/>
    </Link>
    <div className="p-5">
        <Link to="/pedir">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description} </p>

        <p className="text-slate-800 font-black m-1">{price}$ mxn</p>
        <button 
        type="button"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={()=>addToCart(menu)}
        >pedir
          </button>
        
    </div>
</div>

  )
}

