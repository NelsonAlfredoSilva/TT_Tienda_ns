/**
 * Principal (Logica): Localiza los productos en json Local y distribuye la información al
 * componente que corresponda.
 */

import { useState, useEffect } from "react"
import { Mensajes } from "../Mensajes/Mensajes"
import { ItemList } from "../ItemList/ItemList"
import { getProducts } from "../../services/productsService"

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando ] = useState(true)
    const [error,setError] = useState(false)

    useEffect(() => {
        setCargando(true);
        // Obteniendo los datos de Firestore (FireBase)
        getProducts()
            .then((data) => setProductos(data))
            .catch((error) => setError(error.message))
            .finally(() => setCargando(false))
    },[])

    if (cargando) {return <Mensajes mensaje = "Cargando datos ... "/>}
    if (error) {return <Mensajes mensaje = "Ocurrio un error en la carga de los datos: {error}"/>}
    
    console.log(productos)
    return (
        <section>
            <ItemList productos = {productos} />
        </section>
    )
}