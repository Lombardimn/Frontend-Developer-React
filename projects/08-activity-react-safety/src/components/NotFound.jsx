import '../styles/notFound.css'

export function NotFound () {
    return (
        <div className="found-content">
            <h2 className="found-title">Page Not Found</h2>
            <img
            className="found-img" 
            src="../../public/404.svg" 
            alt="Un robot en el suelo al que se le salieron piezas internas y tiene un cartel indicando el error 404 de pagina no encontrada."
            />
        </div>
    )
}