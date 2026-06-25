import { useCart } from "../../context/CartContext"
import { CartItem } from "./CartItem"

export const CartList = () => {
    const {Cart} = useCart()

    return(
    <>
        <div>
            {Cart.map((element)=>(
                <CartItem key={element.id} item = {element}/>
            ) )}
        </div>
    </>)
}