import React from "react";
import styles from '../styles/footer.module.css'

export default function Footer() {
    return (
        <footer className = {styles.footer}>
        <section className = {styles.reference}>
            <p  className = {styles.text}>
                Realizado para el curso de
                <span className = {styles.span}>  Desarrollo Frontend React</span>
            </p>
            <p  className = {styles.text}>
                Actividad 04
            </p>
        </section>
        <p className = {styles.text}>
            <span  className = {styles.span}>
                &copy; 2023, Write by Lombardi Matias
            </span>
            . Contenido de libre uso.
        </p>
    </footer>
    );
}