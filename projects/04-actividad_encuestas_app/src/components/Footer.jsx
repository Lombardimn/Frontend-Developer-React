import styles from '../styles/footer.module.css'

export default function Footer() {
    return (
        <footer className = {styles.footer}>
        <section className = {styles.reference}>
            <span  className = {styles.text}>
                Actividad 04
            </span>
            <p  className = {styles.text}>
                Realizado para el curso de
                <span className = {styles.span}>      Desarrollo Frontend React &copy; 2023, Write by Lombardi Matias
                </span>
            </p>
        </section>
        <p className = {styles.text}>
            Contenido de libre uso.
        </p>
    </footer>
    );
}