import { Link } from "react-router-dom";
import '../styles/home.css'

// eslint-disable-next-line react/prop-types
export function Home ({listQuestions}) {
    return (
        <section>
            <h2>Encuestas Disponibles</h2>
            {
                // eslint-disable-next-line react/prop-types
                listQuestions.map( question => (
                    <Link key={question.id} className="question-a" to={`/survey/${question.id}`}>
                        <div 
                            className="question-container"
                            // key={question.id}
                        >
                            <article className="question-item">
                                <h2 className="question-title">
                                    {question.title}
                                </h2>
                                <p className="question-description">
                                    {question.description}
                                </p>
                            </article>
                        </div>
                    </Link>
                ))
            }
        </section>
    )
}