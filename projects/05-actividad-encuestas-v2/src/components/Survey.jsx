import { useParams, Link } from "react-router-dom"
import { useState } from "react";
import { useSurvey } from "../hooks/useSurvey";

import '../styles/survey.css'

// eslint-disable-next-line react/prop-types
export function Survey() {
    const { id } = useParams();
    const { mappedSurveys } = useSurvey()

    const survey = Array.isArray(mappedSurveys) 
    // eslint-disable-next-line react/prop-types
    ? mappedSurveys.find((ques) => ques.idSurvey === parseInt(id)) 
    : null;

    const [selectedColors, setSelectedColors] = useState({})

    const handleColorChange = (questionId, color) => {
        setSelectedColors((prevSelectedColors) => ({
            ...prevSelectedColors,
            [questionId]: color,
        }));
    };

    return (
        <article>
            <section className="survey-container">
                <div className="survey-item">
                    <Link className="survey-link" to='/'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="m12 16l1.4-1.4l-1.6-1.6H16v-2h-4.2l1.6-1.6L12 8l-4 4l4 4Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                            />
                        </svg>
                        Volver
                    </Link>
                    <h2 className="survey-title">
                        {survey.title}
                    </h2>
                    <p className="survey-text">
                        {survey.description}
                    </p>
                </div>
            </section>
            <article className="survey-container">
                <div className="survey-item">
                    <h3 className="survey-subtitle">
                        Preguntas
                    </h3>
                    {
                        !survey.questions
                            ? <p>Sin preguntas</p>
                            : <section className="survey-content">
                                {
                                    survey.questions.map(
                                        (question) => (
                                            <div key={question.idQuestion}>
                                                <p>
                                                    {question.question}
                                                </p>
                                                <ul className="survey-box" key={`ul-${question.idQuestion}`}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="32"
                                                        height="32"
                                                        viewBox="0 0 24 24"
                                                        className="survey-svg"
                                                    >
                                                        <path
                                                            fill={selectedColors[question.idQuestion] ? selectedColors[question.idQuestion]: "currentColor"}
                                                            d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8l-1.41-1.42Z"
                                                        />
                                                    </svg>
                                                    {
                                                        question.options.map(
                                                            (option) => (
                                                                <li
                                                                    className="survey-question"
                                                                    key={option.idOption}
                                                                >
                                                                    <input
                                                                        type="radio"
                                                                        id={`check${question.idQuestion}-${option.idOption}`}
                                                                        name={`group-${question.idQuestion}`}
                                                                        className="survey-input"
                                                                        onChange={() => handleColorChange(question.idQuestion, '#009614')}
                                                                    />
                                                                    <p>{option.option}</p>
                                                                </li>
                                                            )
                                                        )
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    )
                                }
                            </section>
                    }
                </div>
            </article>
        </article>
    )
}