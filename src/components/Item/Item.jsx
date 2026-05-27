/**
 * Item = Componente presentacional. Es el encargado de la apariencia.
 * Se reutiliza en ItemDetail
 */

import "./Item.css";

export const Item = ({name, description,price,image, children}) => {
    return (
        <article className="tarjetaProducto">
            <img src={image} alt={`${name}`} />
            <h3>Código: {name}</h3>
            <p>{description}</p>
            <p>$ {price}</p>
            {children}
        </article>
    )
}