import React from 'react';
import Encuentas from '@/components/Encuentas';
import '@/styles/page.css'
import Footer from '@/components/Footer';
import encuestas from '@/utils/encuestas.json'

export default function App() {
    return (
        <>
        <main className = 'App'>
            <h1>Aplicación de Encuestas</h1>
            
            {/* Contenido de las páginas */}
            <Encuentas encuestas = {encuestas} />
        </main>
        <Footer />
        </>
    )
}