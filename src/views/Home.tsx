import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
      <div className="bg-slate-950 text-9xl">
        <h1 className="text-9xl text-slate-100">Bienvenidos</h1>

      </div>
      <div className="bg-slate-800 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <p className=" hover:text-slate-400  text-right text-4xl text-slate-200" >Quienes Somos?</p>
          <Link to="/menu" className=" hover:text-slate-400  text-right text-4xl text-slate-200">Menu</Link>
        </div>
      </div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <p> Somos un acogedor restaurante que nació como un sueño en una modesta fonda el 3 de Julio de 2010 y que se ha construido y mejorado; y a partir del 5 de Abril de 2016 en nuestra actual ubicación para brindar una oferta de platos típicos, así como también diferentes opciones para satisfacer sus antojos. Estamos ubicados en pleno corazón de Túquerres, en el departamento de Nariño; al suroccidente de Colombia; contamos con un espacio finamente decorado con estilo moderno, donde podrá apreciar calidad y el toque diferente de sus platos preparados con selectos ingredientes, asimismo podrá degustar la suculenta cocina típica, pastas, y pescados de la mejor calidad. Martino's Restaurante, es una fiesta en el paladar, un juego para las pupilas, es un punto de reunión de negocios y de complicidad.</p>
      </div>


    </>

  )
}
