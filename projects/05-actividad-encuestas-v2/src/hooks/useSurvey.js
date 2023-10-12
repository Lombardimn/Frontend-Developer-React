import surveys from '../mocks/surveys.json'

export function useSurvey () {
    const hasSurvey = surveys.length > 0

    const  mappedSurveys = surveys.map(survey => ({
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

    return {surveys: mappedSurveys, hasSurvey}
}