import { useCart } from "../../context/CartContext"

export const CartSummary = () => {
    const {getCartTotal, checkOut} = useCart()
    const total = getCartTotal()
    return (
        <>
            <p>TOTAL A PAGAR: 👉 ${total}</p>
            <button onClick={checkOut}>Finalizar La compra</button>
        </>
    )
}