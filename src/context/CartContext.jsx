/**
 * se puede crear todo el contexto en diferentes archivos.
 * En este contexto generamos el comportamiento del carrito por nmedio de context.
 */

import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

// Creamos el contexto

const CartContext = createContext()

// Custom Hook

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new error('useCart debe usarse dentro de un cartProvider')
    }
    return context
}

// Proveedor (Provider) componente que se envuelve en toda la app desde main.jsx

export const CartProvider = ({children}) => {
    const navigate = useNavigate()
    const [Cart, setCart] = useState([])
    // Funcion que evalua si existe un elemento o item dentro del carrito retorna un booleano.
    const isInCart = (item) => {
        // Metodo some realiza una comparacion de un determinado valor
        const  inCart = Cart.some((element) => element.id === item.id);
        return inCart;
    }
    /* Funciones que Manejan el Carrito  */

    // Agregar Item Al Carrito
    // El argumento es todo el item para poder agregar a Cart por spred operator

    const addItem = (item) => {
        if(isInCart(item)) {
            alert("El producto ya está agregado al carrito");
            return;
        }
        setCart([...Cart, item]);
        alert('Producto Agregado al Carrito')
    }
    // Funcion que elimina un item del carrito
    // Solamente tomamos como argumento el ID del producto
    const removeItem = (id) => {
        const updateCart = Cart.filter((element) => element.id !== id);
        setCart(updateCart);
        alert('Producto Eliminado !')
    }

    // Funcion que limpia o vacia el carrito
    const clearCart = () => {
        setCart([]);
    };

    // Total de items en Carrito
    /* En este caso solamente se cuenta la cantidad de items ya que con isInCart prevenimos
    que no se dupliquen productos  */

    const getTotalItems = () => {
        return Cart.length;
    }

    // Suma total de la compra para mostrar en el elemento summary
    const getCartTotal = () => {
        // Se usa reduce para tomar un contador que suma el precio de cada elemento iniciando desde 0
        return Cart.reduce((acc, element) => acc + element.price,0)
    }

    // CheckOut o cierre de compra
    const checkOut = () => {
        // se puede usar confirm()
        alert('Su compra ha sido realizada!')
        clearCart()
        navigate("/")
    }

    const values = {
        Cart,
         addItem,
         removeItem,
         getTotalItems,
         clearCart,
         getCartTotal,
         checkOut
        }

    return (
        <CartContext.Provider value={values}>{children}</CartContext.Provider>
    )
}