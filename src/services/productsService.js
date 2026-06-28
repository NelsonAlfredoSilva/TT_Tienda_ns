/**
 * En este archivo se coloca las funciones que use el servicio de firebase.
 * Se puede colocar dentro del useEffect en el contenedor (Si).
 */

import { collection, addDoc, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import {db} from "../firebase/config";

// coleccition() se conecta a la base de datos de firestore retornando un ID
// de conexión (similar a la conexión con un bd de mysql)

const productsRef = collection(db,"productos");

// Función que recupera los productos de FireBase
export const getProducts = async () => {
    try {
        // Tomando una foto instantanea con la llamada a la funcion que toma
        // todos los documentos de la base de datos pasando como parámetro
        // el ID de referencia de conexión.

        const snapshot = await getDocs(productsRef);

        // Destructurando el resultado de la consulta.
        // Usando map()
        // El Id del registro viene por fuera.
        // La respuesta de la "consulta" con getDocs no es un
        // Array de Objeto, sino que es una "Collección" de un 
        // montón de otras cosas.
        // En el retorno el metodo data() viene del servicio de Firebase

        const productsFormat = snapshot.docs.map((doc)=>{
            return {id: doc.id, ...doc.data()}
        });
        return productsFormat;
        
    } catch (error) {
        console.error('Error al recuperar los datos ', error);
        return [];
    };
};

// Función que recupera un producto por su ID
export const getProductById = async (id) => {
    try {
        // Referencia al documento con la funcion doc que recupera un solo registro (documento)
        const productRef = doc(db,"productos",id);

        // Obtenemos el registro con la función getDoc en singular
        const snapshot = await getDoc(productRef);

        // Verifico que exista
        if (snapshot.exists()) {
            const product = {id: snapshot.id, ...snapshot.data()};
            console.log("Doc: ", product);
            return product;
        } else  {
            return null;
        };

    } catch (error) {
        console.log("Error al recuperar el producto por Id", error);
        return null
    }
}

export const getByCategory = async (category) => {
    try {
        let queryRef;

        if (category) {
            queryRef = query(productsRef, where("category","==",category));
        } else {
            queryRef = productsRef;
        }

        const snapshot = await getDocs(queryRef);

        const productsFormat = snapshot.docs.map((doc)=> {
            return {id: doc.id, ...doc.data()};
        });
        return productsFormat

    } catch (error) {
      console.error('Error al recuperar los datos por Categoria ', error);
        return [];
    }
    
}