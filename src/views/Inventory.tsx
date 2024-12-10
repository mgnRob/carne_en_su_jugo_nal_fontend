
import InventarioDetails from '../components/inventoryDetails';
import { useInventario } from '../hooks/useInventario';

export default function Inventory() {
  const { inv,} = useInventario()
  return (
    <>
      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-1">id</th>
              <th className="p-2">productos</th>
              <th className="p-2">cantidad </th>
              <th className="p-3">platillos</th>
            </tr>
          </thead>
          <tbody>
          {inv.map(inventario =>(
            <InventarioDetails
              key={inventario.id}
              inventario={inventario}
            />

            ))}    
          </tbody>
        </table>
      </div>
    </>
  )
} 