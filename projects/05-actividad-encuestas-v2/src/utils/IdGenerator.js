export function generateId({numOptions}) {
    const options = [];
    for (let i = 1; i <= numOptions; i++) {
        options.push({
            id: i,
            option: `Opción ${i}`
        });
    }
    return options
}

export const addQuestions = ({newsurvey, listQuestions, setListQuestion}) => {
    console.log('neysurvey',newsurvey)
    const survey = {
        id: listQuestions.length + 1,
        title: newsurvey.title,
        description: newsurvey.description,
        questions: [
            {
                id: 1,
                questions: newsurvey.question,
                options: generateId
            }
        ]
    }

    setListQuestion([...listQuestions, survey]);

    console.log(survey)
    return listQuestions
}