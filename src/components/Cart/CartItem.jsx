import { useCart } from "../../context/CartContext"
import { Item } from "../Item/Item"
export const CartItem = ({item}) => {
    const {removeItem} = useCart()
    return (
        <Item {...item}>
            {/**La función flecha dentro del onClick es para evitar que se dispare el evento Clic */}
            <button 
            onClick={()=>(removeItem(item.id))}>Eliminar Producto ❌</button>
        </Item>
    )
}