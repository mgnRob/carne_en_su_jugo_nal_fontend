import { useState, useEffect,} from 'react'
import {dbInventory} from '../data/dbInventory'
import type { CartItem,} from '../types'

export const useInventario = () => {

    const initialInvent = () : CartItem[] => {
        const localStorageCart = localStorage.getItem('cartinv')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }
    const [inv] = useState(dbInventory)
    const [invent] = useState(initialInvent)
    
    useEffect(() => {
        localStorage.setItem('invent', JSON.stringify(invent))
    }, [invent])

    return {

        inv,
        invent,

    }
}