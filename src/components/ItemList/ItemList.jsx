/**
 * ItemList: componente que organiza todo el contenido con los valores recibidos del componente que realiza la lógica.
 */
import { Link } from "react-router-dom";
import { Mensajes } from "../Mensajes/Mensajes";
import "./ItemList.css";
import { Item } from "../Item/Item";

export const ItemList = ({productos}) => {
    if(!productos.length) {
        return <Mensajes mensaje = "No hay Productos para mostrar"/>
    };
    return (
        <div className="contenedor-Productos">
            {
                // productos.map((prod)=>(<Item key={prod.id} {...prod}/>))
                // Para la Navegación se integra el componente link y el key  
                // se le asigna a cada link del ciclo.
                productos.map((prod) => (
                    <Link to = {`/productos/${prod.id}`} key = {prod.id}>
                        <Item {...prod}/>
                    </Link>
                ) )
            }
        </div>
    )
}