// Componente principal del Carrito
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import { CartList } from "./CartList"
import { CartSummary } from "./CartSummary"

export const CartView = () => {
    const { Cart } = useCart()

    return(
        <section>
            <h1>Carrito de Compras 🛒 </h1>
            {
                // Usando los Operadores ternarios se muestra en segmente dependiendo del condicional

            Cart.length ? (
            <>
                <CartList/>
                <CartSummary/>
            </>) : ( 
            <>
                <p>Tu Carrito está vacío</p>
                <Link to={"/"}>Volver a la tienda</Link>
            </>)
            }
        </section>
    )
}