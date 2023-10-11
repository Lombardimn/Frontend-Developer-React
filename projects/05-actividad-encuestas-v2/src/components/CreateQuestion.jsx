import '../styles/creactquestion.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export function CreateQuestion ({addQuestions}) {
    
    const { register, handleSubmit, watch, reset, formState: {errors} } = useForm()


    const navigate = useNavigate()
    const onSubmit = handleSubmit((data) => {
        addQuestions(data)
        console.log(data)
        navigate('/')
        
    })

    const handleReset = () => {
        reset()
    }

    const handleModal = () => {

    }

    console.log('errores',errors)

    return (
        <>
            <h2>Creando nueva Encuesta</h2>
            <form  onSubmit={onSubmit}>
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

                { errors.title && <span>{errors.title.message}</span> }

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

                { errors.description && <span>{errors.description.message}</span> }

                <div className="form-modal">
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

                    { errors.question && <span>{errors.question.message}</span> }
                    
                    <label htmlFor="question">¿Cuántas opciones desea habilitar?</label>
                    <select
                        name="selector"
                        id="selector"
                        {
                            ...register('selector',
                            {
                                required: 'Debe seleccionar una cantidad de opciones como respuesta',
                                validate: value => 
                                    value !== 'default' 
                                        || 'Debe seleccionar una cantidad de opciones como respuesta.'
                            })
                        }
                    >
                        <option value="default">...</option>
                        <option value="firstOption">1 Opción</option>
                        <option value="twoOptions">2 Opciones</option>
                        <option value="treeOptions">3 Opciones</option>
                        <option value="fourOptions">4 Opciones</option>
                    </select>

                    { errors.selector && <span>{errors.selector.message}</span> }

                    { 
                        watch('selector') === 'default' 
                            && ('')
                    }

                    {
                        watch('selector') === 'firstOption' 
                            && (
                                <>
                                    <label htmlFor="option-1-1">Opción:</label>
                                    <input 
                                        type="text"
                                        placeholder='value'
                                        id='option-1-1'
                                        name='option-1-1'
                                        {
                                            ...register('option11', 
                                            {
                                                required: 'Este campo es Obligatorio.'
                                            }
                                        )}
                                    />

                                    {errors.option11 && <span>{errors.option11.message}</span>}
                                </>
                            )
                    }

                    {
                        watch('selector') === 'twoOptions' 
                            && (
                                <>
                                    <p>Opciones:</p>
                                    <input 
                                        type="text"
                                        placeholder='value 1'
                                        id='option-2-1'
                                        name='option-2-1'
                                        {
                                            ...register('option21', 
                                            {
                                                required: 'Este campo es Obligatorio.'
                                            }
                                        )}
                                    />

                                    {errors.option21 && <span>{errors.option21.message}</span>}

                                    <input 
                                        type="text"
                                        placeholder='value 2'
                                        id='option-2-2'
                                        name='option-2-2'
                                        {
                                            ...register('option22', 
                                            {
                                                required: 'Este campo es Obligatorio.'
                                            }
                                        )}
                                    />

                                    {errors.option22 && <span>{errors.option22.message}</span>}
                                </>
                            )
                    }

                    {
                        watch('selector') === 'treeOptions' 
                            && (
                                <>
                                    <p>Opciones:</p>
                                    <input 
                                        type="text"
                                        placeholder='value 1'
                                        id='option-3-1'
                                        name='option-3-1'
                                        {
                                            ...register('option31', 
                                            {
                                                required: 'Este campo es Obligatorio.'
                                            }
                                        )}
                                    />

                                    {errors.option31 && <span>{errors.option31.message}</span>}

                                    <input 
                                        type="text"
                                        placeholder='value 2'
                                        id='option-3-2'
                                        name='option-3-2'
                                        {
                                            ...register('option32', 
                                            {
                                                required: 'Este campo es Obligatorio.'
                                            }
                                        )}
                                    />

                                    {errors.option32 && <span>{errors.option32.message}</span>}

                                    <input 
                                        type="text"
                                        placeholder='value 3'
                                        id='option-3-3'
                                        name='option-3-3'
                                        {
                                            ...register('option33', 
                                            {
                                                required: 'Este campo es Obligatorio.'
                                            }
                                        )}
                                    />

                                    {errors.option33 && <span>{errors.option33.message}</span>}
                                </>
                            )
                    }

                    {
                        watch('selector') === 'fourOptions' 
                            && (
                                <>
                                    <p>Opciones:</p>
                                    <input 
                                        type="text"
                                        placeholder='value 1'
                                        id='option-4-1'
                                        name='option-4-1'
                                        {
                                            ...register('option41', 
                                            {
                                                required: 'Este campo es Obligatorio.'
                                            }
                                        )}
                                    />

                                    {errors.option41 && <span>{errors.option41.message}</span>}

                                    <input 
                                        type="text"
                                        placeholder='value 2'
                                        id='option-4-2'
                                        name='option-4-2'
                                        {
                                            ...register('option42', 
                                            {
                                                required: 'Este campo es Obligatorio.'
                                            }
                                        )}
                                    />

                                    {errors.option42 && <span>{errors.option42.message}</span>}

                                    <input 
                                        type="text"
                                        placeholder='value 3'
                                        id='option-4-3'
                                        name='option-4-3'
                                        {
                                            ...register('option43', 
                                            {
                                                required: 'Este campo es Obligatorio.'
                                            }
                                        )}
                                    />

                                    {errors.option43 && <span>{errors.option43.message}</span>}

                                    <input 
                                        type="text"
                                        placeholder='value 4'
                                        id='option-4-4'
                                        name='option-4-4'
                                        {
                                            ...register('option44', 
                                            {
                                                required: 'Este campo es Obligatorio.'
                                            }
                                        )}
                                    />

                                    {errors.option44 && <span>{errors.option44.message}</span>}
                                </>
                            )
                    }
                    
                    <button type='button' onClick={handleModal}>+</button>
                    <button type='submit'>Guardar</button>
                    <button type='button' onClick={handleReset}>Borrar</button>
                </div>
            </form>
        </>
    )
}