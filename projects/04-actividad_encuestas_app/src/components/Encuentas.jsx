import styles from '../styles/encuesta.module.css'

// eslint-disable-next-line react/prop-types
export default function Encuentas({encuestas}) {
    return (
        <section className = {styles.content}>
            <h2 className = {styles.title}>Encuentas Disponibles</h2>
            <ul>
                {
                    // eslint-disable-next-line react/prop-types
                    encuestas.map(encuesta => (
                        <li key = {encuesta.id} className = {styles.question}>
                            {encuesta.pregunta}
                            <ul className = {styles.option}>
                                {
                                    encuesta.opciones.map((opcion, index) => (
                                    <li key = {index}>
                                        <input 
                                            type = "radio" 
                                            className = {styles.check} 
                                            id = {`check${index}-${encuesta.id}`} 
                                            name = {`group-${encuesta.id}`}
                                        />
                                        {opcion}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}


