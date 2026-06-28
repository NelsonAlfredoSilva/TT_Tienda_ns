// Componente Cerebro que realiza la logica. En este caso localiza el registro que se pasa
// como parámetro. Usamos useParam()

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Mensajes } from "../Mensajes/Mensajes"
import { getProductById } from "../../services/productsService"

export const ItemDetailContainer = () => {
    const {id} = useParams();
    const [itemDetail, setItemDetail] = useState(null)
    const [cargando, setCargando] = useState(true)

    useEffect( ()=> {
        getProductById(id)
        .then((data) => setItemDetail(data))
        .catch((err) => console.log(err))
        .finally(() => setCargando(false))
    },[])

    if(cargando) return <Mensajes mensaje = "Cargando Item"/>
    if(!itemDetail) return <Mensajes mensaje = "Producto no encontrado"/>

    return (
        <section>
            <h1>Detalle del producto</h1>
            <div>
                <ItemDetail item={itemDetail} />
            </div>
        </section>
    )
}