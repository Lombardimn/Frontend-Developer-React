import { aboutData } from '../utils/getSearchData';

export function About() {
    const infodata = aboutData()

    return (
        <div className="container">
            <h2>Acerca de Mí</h2>
            <div className="card">
                <div className="card-body">
                    {
                        infodata && infodata.map((data) => (
                            <div key={data.id}>
                                <h3 className="card-title">{data.nombre}</h3>
                                <p className="card-text">Edad: {data.edad} años</p>
                                <p className="card-text">Profesión: {data.profesion}</p>
                                <p className="card-text">{data.descripcion}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}