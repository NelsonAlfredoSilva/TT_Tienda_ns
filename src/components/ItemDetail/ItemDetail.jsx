import { Item } from "../Item/Item"

export const ItemDetail = ( {item} ) => {
    return (
        //  total del registro con spread operator para ser reutilizado el componente Item.
        <Item {...item}>
            {/* children agregado el boton para adicionar al carrito */}
            <button>Agregar a carrito</button>
        </Item>
    ) 
}