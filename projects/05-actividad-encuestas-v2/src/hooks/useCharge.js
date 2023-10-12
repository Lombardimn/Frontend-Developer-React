export function useCharge ({data, listSurveys}) {
    const newSurvey = {
        idSurvey: listSurveys.length + 1,
        title: data.title,
        description: data.description,
        questions: object.idQuestion.map( question => ({
            idQuestion: question.index,
            question: object.question
        })

        ) [{
            idQuestion: object.idQuestion,
            question: object.pregunta,
            options: object.opciones.map(option => ({
                idOption: object.id,
                option: object.texto
            }))
        }]
        }
    };
}