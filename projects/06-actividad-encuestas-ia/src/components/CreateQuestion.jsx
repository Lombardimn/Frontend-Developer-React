import { Controller, useForm } from 'react-hook-form'
import { saveDataJSON } from '../hooks/useCharge'
import { useState } from 'react'

import {listSurveys} from '../mocks/listSurveys'

export function CreateQuestion() {

    const { register, handleSubmit, control, reset, setValue, formState: { errors } } = useForm()

    const [data, setData] = useState({
        idSurvey: null,
        title: '',
        description: '',
        selector: 'default',
        questions: [],
        options: [],
    })

    const [valueSelector, setValueSelector] = useState('default')
    const [questionCounter, setQuestionCounter] = useState(1)
    const [optionCounter, setOptionCounter] = useState(0)

    const handleChange = ((formData) => {       
        const objectResult = {
            idSurvey: null,
            title: formData.title,
            description: formData.description,
            selector: valueSelector,
            options: [],
            questions: [],
        };

        for(let i = 1; i <= valueSelector; i++) {
            const optionId = formData[`option${i}`]
            objectResult.options.push({ refQuestion: questionCounter,idOption: i, option: optionId })
        }

        objectResult.questions.push({ idQuestion: questionCounter, question: formData.question })

        setData((prevData) => ({
            ...prevData,
            title: objectResult.title,
            description: objectResult.description,
            selector: objectResult.selector,
            options: [...prevData.options, ...objectResult.options],
            questions: [...prevData.questions, ...objectResult.questions],
        }));

        if (valueSelector !== 'default')
            setOptionCounter(optionCounter + Number(valueSelector))
        
        // actualizo para la nueva pregunta
        setQuestionCounter(questionCounter + 1)
        setValue('question', '')

        for (let i = 0; i <= valueSelector; i++){
            setValue(`option${i}`, '')
        }
        setValueSelector('default')

    });

    const handleSelectChange = (e) => {
        // Actualiza el estado 'numOptions' cuando el usuario selecciona una opción
        setValueSelector(e.target.value);
    };

    const onSubmit =  () => {
        if (listSurveys && listSurveys.length) {
            saveDataJSON(data, listSurveys);
        } else {
            console.error("listSurveys no es un array válido o está vacío.");
        }
    };

    const handleReset = () => {
        // Reiniciar el formulario si es necesario.
        setData({
            idSurvey: null,
            title: '',
            description: '',
            selectorGrnal: 'default',
            questions: [],
            options: [],
        });

        reset()
        setValueSelector('default');
        setQuestionCounter(1);
    };

    return (
        <main className="form-container">
            <h2 className="form-header">Nueva Encuesta</h2>
            <form className="form" onSubmit={handleSubmit(handleChange)}>
                <div className="form-title">
                    <label htmlFor="title">Titulo:</label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title"
                        onChange={(e) => {
                            setData((prevData) => ({
                                ...prevData,
                                title: e.target.value
                            }))
                        }}
                        {
                            ...register('title',
                                {
                                    required: 'Este campo es Obligatorio.',
                                    maxLength: {
                                        value: 50,
                                        message: 'El titulo debe tener menos de 50 caracteres.'
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'Debe como mínimo insertar 3 caracteres.'
                                    }
                                }
                            )
                        }
                    />

                    {
                        errors.title && <span>{errors.title.message}</span>
                    }
                </div>
                <div className='form-description'>
                    <label htmlFor="description">Descripción:</label>
                    <input 
                        type="text" 
                        id="description" 
                        name="description" 
                        {
                            ...register('description',
                                {
                                    required: 'Este campo es Obligatorio.',
                                    maxLength: {
                                        value: 140,
                                        message: 'La descripción debe tener menos de 140 caracteres.'
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'Debe como mínimo insertar 3 caracteres.'
                                    }
                                }
                            )
                        }
                    />

                    {
                        errors.description && <span>{errors.description.message}</span>
                    }
                </div>
                <div className='form-question'>
                    <label htmlFor="question">Pregunta:</label>
                    <input 
                        type="text" 
                        id="question" 
                        name="question" 
                        {
                            ...register('question',
                                {
                                    required: 'Este campo es Obligatorio.',
                                    maxLength: {
                                        value: 50,
                                        message: 'La pregunta debe tener menos de 50 caracteres.'
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'Debe como mínimo insertar 3 caracteres.'
                                    }
                                }
                            )
                        }
                    />

                    {
                        errors.question && <span>{errors.question.message}</span>
                    }
                </div>
                <div className='form-selector'>
                    <label htmlFor="selector">¿Cuántas opciones desea habilitar?</label>
                    <Controller 
                        name='selector' 
                        control={control} 
                        defaultValue={"default"} 
                        rules={{
                            required: 'Debe seleccionar una opción.'
                        }}
                        render={({ field }) => (
                            <select
                                {...field}
                                id="selector"
                                name="selector"
                                value={valueSelector}
                                onChange={handleSelectChange}
                            >
                                <option value="default">-- Seleccionar --</option>
                                <option value="1">1 Respuesta</option>
                                <option value="2">2 Respuestas</option>
                                <option value="3">3 Respuestas</option>
                                <option value="4">4 Respuestas</option>
                            </select>
                        )}
                    />

                    {errors.selector 
                        && valueSelector === 'default' 
                        && <span>{errors.selector.message}</span>
                    }

                    {
                        valueSelector !== 'default' && (
                            <>
                                {
                                    Array.from({ length: parseInt(valueSelector, 10) }).map((_, index) => (
                                        <div key={index}>
                                            <label htmlFor={`option${index + 1}`}>{`Opcion ${index + 1}`}</label>
                                            <Controller
                                                name={`option${index + 1}`}
                                                control={control}
                                                defaultValue=""
                                                rules={{
                                                    required: 'Este campo es Obligatorio.'
                                                }}
                                                render={({ field }) => (
                                                    <input
                                                        type='text'
                                                        placeholder={`value${index + 1}`}
                                                        id={`option${index + 1}`}
                                                        {...field}
                                                    />
                                                )}
                                            />

                                            {
                                                errors[`option${index + 1}`]
                                                    && <span>
                                                        {errors[`option${index + 1}`].message}
                                                        </span>
                                            }
                                        </div>
                                    )) 
                                }
                            </>
                        )
                    }
                </div>
                <div className='form-counter'>
                    {
                        questionCounter === 1
                            ? <span className='form-counter-value'>0</span>
                            : <span className='form-counter-value'>{questionCounter - 1}</span>
                    }
                    <button type='submit'>Guardar Pregunta</button>
                </div>
                <div className='form-buttons'>
                    <button type='button' onClick={onSubmit}>Finalizar</button>
                    <button type='button' onClick={handleReset} className='form-cancel'>Cancelar</button>
                </div>
            </form>
        </main>
    )
}