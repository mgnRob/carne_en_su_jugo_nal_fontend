import { Link } from "react-router-dom";

export default function Navbar() {
    return (

        <>

            <nav className="bg-cyan-800 border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-10 ">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="./img/maya.png" className="h-12 placeholder-yellow-700 slate-300" alt="Logo" />
                        <p className=" text-slate-300 self-center text-1xl font-semibold whitespace-nowrap dark:text-white">Carnes en su jugo</p> 
                        <p className=" text-slate-300  text-5xl font-semibold whitespace-nowrap dark:text-white"> Guerrero </p>
                    </Link>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <Link to="/" className="block py-2 px-3 text-white bg-blue-100 rounded md:bg-transparent md:text-blue-100 md:p-0 dark:text-white md:dark:text-blue-100" aria-current="page">
                                Home
                            </Link>
                            <li>
                                <a href="/menu" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0 dark:text-white md:dark:hover:text-blue-100 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Menu</a>
                            </li>
                            <li>
                                <a href="/inventario" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0 dark:text-white md:dark:hover:text-blue-100 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Inventario</a>
                            </li>
                          
                        </ul>
                    </div>
                </div>
            </nav>

        </>

    )
}