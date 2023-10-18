import {listSurveys} from '../mocks/listSurveys';

export function useSurvey() {
    const storedSurveys = JSON.parse(localStorage.getItem('surveys'));

    const mappedSurveys = storedSurveys === null 
    ? mappingData(listSurveys) 
    : mappingData(storedSurveys);

    return { mappedSurveys, hasSurvey: mappedSurveys.length > 0 };
}

export function mappingData(data) {
    const mappedSurveys = data.map(survey => ({
        idSurvey: survey.id,
        title: survey.titulo,
        description: survey.descripcion,
        questions: survey.preguntas.map(question => ({
            idQuestion: question.id,
            question: question.pregunta,
            options: question.opciones.map(option => ({
                idOption: option.id,
                option: option.texto
            }))
        }))
    }));

    return mappedSurveys;
}
