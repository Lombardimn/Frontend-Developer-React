import {Link} from 'react-router-dom'
import { useSurvey } from "../hooks/useSurvey";

// eslint-disable-next-line react/prop-types
export function Home() {
    const { mappedSurveys, hasSurvey } = useSurvey()

    return (
        <main className="home-container">
            <h2 className="home-title">Encuestas disponibles</h2>
            {
                hasSurvey 
                    ? (
                        // eslint-disable-next-line react/prop-types
                        mappedSurveys.map(survey => (
                            <Link 
                                key={survey.idSurvey} 
                                to= {`/survey/${survey.idSurvey}`}
                                className='home-link'
                            >
                                <article  className="home-survey-container" 
                                key={survey.id}
                                >
                                    <h3 className="home-survey-title">{survey.title}</h3>
                                    <p className="home-survey-description">{survey.description}</p>
                                </article>
                            </Link>
                    ))
                    )
                    : (
                        <article className="home-survey-container">
                            <h3 className="home-survey-title">
                                Sin datos de Título
                            </h3>
                            <p className="home-survey-description">
                                Sin datos de Descripción
                            </p>
                        </article>
                    )
            }
        </main>
    )
}