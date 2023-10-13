import { Link } from "react-router-dom";
import { useSurvey } from "../hooks/useSurvey";
import '../styles/home.css'

// eslint-disable-next-line react/prop-types
export function Home () {
    const { mappedSurveys, hasSurvey } = useSurvey()

    return (
        <section>
            <h2>Encuestas Disponibles</h2>
            {
                hasSurvey
                    ? (
                        // eslint-disable-next-line react/prop-types
                        mappedSurveys.map( survey => (
                            <Link 
                                key={survey.idSurvey} 
                                className="question-a" 
                                to={`/survey/${survey.idSurvey}`}
                            >
                                <div className="question-container">
                                    <article className="question-item">
                                        <h2 className="question-title">
                                            {survey.title}
                                        </h2>
                                        <p className="question-description">
                                            {survey.description}
                                        </p>
                                    </article>
                                </div>
                            </Link>
                        ))
                    )
                    : (
                        <div className="question-container">
                            <article className="question-item">
                                <h2 className="question-title">
                                    Sin datos de Título
                                </h2>
                                <p className="question-description">
                                    Sin datos de Descripción
                                </p>
                            </article>
                        </div>
                    )
            }
        </section>
    )
}