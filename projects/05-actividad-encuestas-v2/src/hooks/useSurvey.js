import surveys from '../mocks/surveys.json'

export function useSurvey() {    
    const listSurveys = JSON.parse(localStorage.getItem('listSurveys'));
    let hasSurvey
    let mappedSurveys = []

    if (listSurveys === null) {
        console.log('El elemento "listSurveys" no se encontró en el localStorage.')

        hasSurvey = surveys.length > 0
        mappedSurveys = mappingData(surveys)
    } else {
        hasSurvey = listSurveys.length > 0
        mappedSurveys = mappingData(listSurveys)
    }

    return{ mappedSurveys, hasSurvey}
}

export function mappingData(data) {
    let mappedSurveys = data.map(survey => ({
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

    return mappedSurveys
}