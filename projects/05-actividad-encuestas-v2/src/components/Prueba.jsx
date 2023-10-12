import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';

export function Prueba() {
    const { handleSubmit, control, formState: { errors } } = useForm();
    const [numOptions, setNumOptions] = useState('default');

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleSelectChange = (e) => {
        setNumOptions(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="selector1">¿Cuántas opciones desea habilitar?</label>
            <Controller
                name="selector"
                control={control}
                defaultValue="default"
                rules={{ required: 'Debe seleccionar una cantidad de opciones como respuesta' }}
                render={({ field }) => (
                    <select
                        {...field}
                        id="selector1"
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
            {errors.selector && <span>{errors.selector.message}</span>}
            {numOptions !== 'default' && (
                <>
                    <p>Opciones:</p>
                    {Array.from({ length: parseInt(numOptions, 10) }).map((_, index) => (
                        <div key={index}>
                            <label htmlFor={`option-${index + 1}`}>Opción:</label>
                            <Controller
                                name={`option${index + 1}`}
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Este campo es obligatorio.' }}
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
                            {errors[`option${index + 1}`] && (
                                <span>{errors[`option${index + 1}`].message}</span>
                            )}
                        </div>
                    ))}
                </>
    )}

            <br />
            <button type="submit">Enviar</button>
        </form>
    );
}
