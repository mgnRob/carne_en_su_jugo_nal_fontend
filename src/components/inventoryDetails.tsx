
import type {Inventario} from '../types'


type InventarioProps = {
    inventario : Inventario, 
  }

export default function InventarioDetails({inventario} : InventarioProps) {
    const {id, productos, cantidad, platillos } = inventario

  return (
    <tr className="border-b text-center">
      <td className="p-1 text-lg text-gray-800">
        {id}
      </td>
      <td className="p-2 text-lg text-gray-800">
        {productos}
      </td>
      <td className="p-2 text-lg text-gray-800 ">
        {cantidad} kg.
      </td>
      <td className="p-3 text-lg text-gray-800 ">
        {platillos}
      </td>
    </tr>
  )
}

