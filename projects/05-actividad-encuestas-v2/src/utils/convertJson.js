export function jsonGenerator ({data, numOptions}) {
    //generamos un objeto JSON
    const formData = {
        title: data.title,
        description: data.description,
        question: data.question,
        numOptions: numOptions,
        options: [],
    };

    // Recopilar opciones si numOptions no es 'default'
    if (numOptions !== 'default') {
        for (let i = 0; i < parseInt(numOptions, 10); i++) {
            formData.options.push(data[`option${i + 1}`]);
        }
    }

    // Convertir el objeto en una cadena JSON
    const formDataJSON = JSON.stringify(formData);

    return formDataJSON
}