import '../styles/creactquestion.css'
//import { jsonGenerator } from '../utils/convertJson'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
//import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export function CreateQuestion() {

    const { register, handleSubmit, control, reset, setValue, formState: { errors } } = useForm()
    
    const [data, setData] = useState({
        idSurvey: null,
        title: '',
        description: '',
        selectorGrnal: 'default',
        questions: [],
        options: [],
    });

    const [numOptions, setNumOptions] = useState('default')
    const [questionCounter, setQuestionCounter] = useState(1)
    const [optionCounter, setOptionCounter] = useState(0)

    //const [listSurveys, setListSurveys] = useState(mappedSurveys)
    //const navigate = useNavigate()

    const handleChange = () => {       
        setQuestionCounter(questionCounter + 1)
        setValue('question', '')

        for (let i = 0; i <= numOptions; i++){
            setValue(`option${i}`, '')
        }
        setNumOptions('default')
    };

    const onSubmit =  ((formData) => {
        for(let i = 1; i <= numOptions; i++) {
            const optionId = formData[`option${i}`]
            setData((prevData) => ({
                ...prevData,
                idSurvey: null,
                title: formData.title,
                description: formData.description,
                selectorGrnal: numOptions,
                options: [ ...prevData.options, { refQuestion: questionCounter,idOption: i, option: optionId }],
            }))
        }

        for(let i = questionCounter; i <= questionCounter; i++) {
            setData((prevData) => ({
                ...prevData,
                questions: [ ...prevData.questions, { idQuestion: i, question: formData.question }]
            }))
        }

        if (numOptions !== 'default') setOptionCounter(optionCounter + Number(numOptions))

        //navigate('/')
    })

    const handleSelectChange = (e) => {
        setNumOptions(e.target.value)
    }

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
        setNumOptions('default');
        setQuestionCounter(1);
    }

    console.log('data',data);
    return (
        <>
            <h2 className="form-title">Nueva Encuesta</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-content'>
                    <label htmlFor="title">Titulo:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={(e) =>{
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
                            })
                        }
                    />

                    {
                        errors.title 
                            && <span>{
                                errors.title.message
                            }</span>
                    }

                    <label htmlFor="description">Descripción:</label>
                    <input
                        type="texarea"
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
                            })
                        }
                    />

                    {errors.description && <span>{errors.description.message}</span>}
                </div>

                <div className='form-content'>
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
                            })
                        }
                    />

                    {
                        errors.question 
                            && <span>{
                                errors.question.message
                            }</span>
                    }

                    <label htmlFor="selector">¿Cuántas opciones desea habilitar?</label>
                    <Controller
                        name="selectorGnral"
                        control={control}
                        defaultValue="default"
                        rules={{ 
                            required: 'Debe seleccionar una cantidad de opciones como respuesta' 
                        }}
                        render={({ field }) => (
                            <select
                                {...field}
                                id="selector"
                                value={numOptions}
                                onChange={handleSelectChange}
                            >
                                <option value="default">...</option>
                                <option value="1">1 Opción</option>
                                <option value="2">2 Opciones</option>
                                <option value="3">3 Opciones</option>
                                <option value="4">4 Opciones</option>
                            </select>
                        )}
                    />
                    
                    {
                        errors.selectorGnral 
                            && numOptions === 'default' 
                            && (<span>{
                                errors.selectorGnral.message
                            }</span>
                        )
                    }

                    {numOptions !== 'default' && (
                        <>
                            {Array.from({ length: parseInt(numOptions, 10) }).map((_, index) => (
                                <div key={index}>
                                    <label htmlFor={`option-${index + 1}`}>Opción:</label>
                                    <Controller
                                        name={`option${index + 1}`}
                                        control={control}
                                        defaultValue=""
                                        rules={{ 
                                            required: 'Este campo es obligatorio.' 
                                        }}
                                        render={({ field }) => (
                                            <input
                                                type="text"
                                                placeholder={`value ${index + 1}`}
                                                id={`option-${index + 1}`}
                                                {...field}
                                                className="form-input"
                                            />
                                        )}
                                    />
                                    {
                                        errors[`option${index + 1}`] 
                                            && (
                                                <span>{errors[`option${index + 1}`].message}</span>
                                            )
                                    }
                                </div>
                            ))}
                        </>
                    )}
                    {
                        questionCounter === 1
                            ? <span className='form-span-counter'>0</span>
                            : <span className='form-span-counter'>{questionCounter - 1}</span>
                    }
                    <button
                        type='button'
                        onClick={handleChange}
                        className='form-newmodal'
                    >
                        Nueva Pregunta
                    </button>

                    <div className='form-button'>
                        <button 
                            type='submit'
                        >
                            Guardar
                        </button>
                        <button 
                            type='button' 
                            onClick={handleReset} 
                            className='form-clear'
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}