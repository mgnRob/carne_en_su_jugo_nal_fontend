import CarneEnSuJugo from "../componentesMenu/CarneEnSuJugo";
import Gracias from "../componentesMenu/Gracias";
import Hamburgesa from "../componentesMenu/Hamburgesa";
import Quesadilla from "../componentesMenu/Quesadilla";
import Taco from "../componentesMenu/Taco";


export default function TomarPedido() {
  return (

    <>

      <h1 className="text-2xl text-slate-900 select-text my-10 mx-10">seleciona la guarnicion basica para tu platillo:</h1>


      <div className="  m-10">
        <CarneEnSuJugo

        />
        
        <Hamburgesa

        />

        <Taco


        />

        <Quesadilla
        
        />

        <Gracias
        
        />

      </div>

    </>

  )
}
