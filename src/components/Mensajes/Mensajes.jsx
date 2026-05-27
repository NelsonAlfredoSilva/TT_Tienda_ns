import './Mensajes.css'

export const Mensajes = ({mensaje}) => {
    return(
        <div className='caja-Mensaje'>
            <p>{mensaje}</p>
        </div>
    )
}