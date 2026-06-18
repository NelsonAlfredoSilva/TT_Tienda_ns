import { useCart } from "../../context/CartContext"
import { Item } from "../Item/Item"

export const ItemDetail = ( {item} ) => {
    const {addItem} = useCart()
    return (
        //  total del registro con spread operator para ser reutilizado el componente Item.
        <Item {...item}>
            {/* children agregado el boton para adicionar al carrito 
            En la funcion onClick que invocamos a la funcion definida en 
            el contexto agregamos una arrowFunction para que no se dispare 
            el evento cuando se renderiza el componente.*/}
            <button onClick={() => addItem(item)}>Agregar a carrito</button>
        </Item>
    ) 
}