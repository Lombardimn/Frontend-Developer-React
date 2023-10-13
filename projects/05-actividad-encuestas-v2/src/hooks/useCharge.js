import surveys from '../mocks/surveys.json'

export function saveDataJSON (data) {
    let listSurveys = JSON.parse(localStorage.getItem('listSurveys'));

    if (listSurveys === null) {
        listSurveys = surveys
    }

    const newSurvey = {
        id: listSurveys.length + 1,
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

    listSurveys.push(newSurvey);
    localStorage.setItem('listSurveys', JSON.stringify(listSurveys));

    const datos = JSON.parse(localStorage.getItem('datos'));
    console.log(datos);
    
    alert('Datos guardados exitosamente en la BD (LocalStorage).');
}