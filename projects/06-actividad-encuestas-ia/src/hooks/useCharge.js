import {listSurveys} from '../mocks/listSurveys'

export function saveDataJSON (data) {
    let surveys = JSON.parse(localStorage.getItem('surveys'));

    if (surveys === null) {
        surveys = listSurveys
    }

    const newSurvey = {
        id: surveys.length + 1,
        titulo: data.title,
        descripcion: data.description,
        preguntas: Array.isArray(data.questions)
            ? data.questions.map((question) => {
                const opciones = Array.isArray(data.options)
                    ? data.options
                        .filter((option) => option.refQuestion === question.idQuestion)
                        .map((option) => ({
                            id: option.idOption,
                            texto: option.option,
                        }))
                    : ['no hay opciones'];
    
                return {
                    id: question.idQuestion,
                    pregunta: question.question,
                    opciones: opciones,
                };
            })
            : ['no hay preguntas'],
    };

    console.log('Se ha generado en la BD el siguiente dato:',newSurvey)

    surveys.push(newSurvey);
    localStorage.setItem('surveys', JSON.stringify(surveys));

    const datos = JSON.parse(localStorage.getItem('datos'));
    console.log(datos);
    
    alert('Datos guardados exitosamente en la BD (LocalStorage).');
}