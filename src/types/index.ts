
export type Menu = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type CartItem = Menu & {
    quantity: number
}

export type InventItem = Menu & {
    quantity: number
}
export type Inventario = {
    id: number
    productos: string
    cantidad: number
    platillos: string
}
// export type CartItem = Pick<Guitar, 'id' | 'name' | 'price' > & {
//     quantity: number
// }
// export type CartItem = Omit<Guitar, 'id' | 'name' | 'price' > & {
//     quantity: number
// }

