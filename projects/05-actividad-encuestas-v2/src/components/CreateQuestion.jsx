import '../styles/creactquestion.css'
//import { jsonGenerator } from '../utils/convertJson'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
//import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export function CreateQuestion({ mappedSurveys }) {

    const { register, handleSubmit, control, reset, formState: { errors } } = useForm()
    
    const [listSurveys, setListSurveys] = useState(mappedSurveys)
    const [numOptions, setNumOptions] = useState('default');
    const [idList, setIDList] = useState([1])
    const [currentID, setCurrentID] = useState(2)

    const [questionList, setQuestionList] = useState([])
    const [questionCurrent, setQuestionCurrent] = useState([''])

    const [data, setData] = useState({ questions: {idQuestion: [], question:[]}, question:'' });
    //const navigate = useNavigate()

    const onSubmit = handleSubmit((data) => {
        if (data.question || data.question.trim() === '') {
            setData({...data, question: data.question})
        } else {
            console.log('no esta vacio')
        }

        setQuestionCurrent(data.question)
        setIDList([...idList, currentID])
        setData({ ...data,  questions: {idQuestion: idList, question: questionList}, selectorGnral: numOptions })
        
        //navigate('/')
    })

    const handleSelectChange = (e) => {
        setNumOptions(e.target.value);
    };

    const handleReset = () => {
        reset()
        setNumOptions('default')
        setCurrentID(2)
        setIDList([1])
        setQuestionList([])
        setQuestionCurrent([''])
    }

    const handleModal = () => {
        setIDList([...idList, currentID])
        setCurrentID(currentID + 1)

        setQuestionCurrent(data.question)
        setQuestionList([...questionList, questionCurrent])

        reset()
        setNumOptions('default')        
    }

    console.log('data reset',currentID, idList)
    console.log('despues',data)
    console.log('errores', errors)
    return (
        <>
            <h2 className='form-title'>Nueva Encuesta</h2>
            <form onSubmit={onSubmit}>
                <div className='form-content'>
                    <label htmlFor="title">Titulo:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
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
                    <br />
                    <button
                        type='button'
                        onClick={handleModal}
                        className='form-newmodal'
                    >
                        Grabar pregunta
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
                            Borrar
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}