import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Alert } from "react-bootstrap";

export function RegistrationForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [submitted, setSubmitted] = useState(false);
    
    const onSubmit = (data) => {
        if (data.password !== data.confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
        }
        setSubmitted(true);
    };

    return (
        <section>
            {submitted 
                ? (<Alert variant="success">Registro exitoso!</Alert>) 
                : (
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group>
                            <Form.Label className="fs-5 fw-bold" htmlFor="firstName">Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="John"
                                {...register("firstName", { required: "Este campo es requerido" })}
                            />
                            {errors.firstName && <span className="fw-bold text-danger">{errors.firstName.message}</span>}
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="fs-5 fw-bold" htmlFor="lastName">Apellido</Form.Label>
                            <Form.Control
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Doe"
                                {...register("lastName", { required: "Este campo es requerido" })}
                            />
                            {errors.lastName && <span className="fw-bold text-danger">{errors.lastName.message}</span>}
                        </Form.Group>

                    <Form.Group>
                        <Form.Label className="fs-5 fw-bold" htmlFor="email">Email</Form.Label>
                        <Form.Control
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@example.com"
                            {...register("email", {
                                required: "Este campo es requerido" })}
                        />
                        {errors.email && <span className="fw-bold text-danger">{errors.email.message}</span>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="fs-5 fw-bold" htmlFor="password">Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            id="password"
                            name="password"
                            placeholder="abc123"
                            {...register("password", {
                                required: "Este campo es requerido" })}
                        />
                        {errors.password && <span className="fw-bold text-danger">{errors.password.message}</span>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="fs-5 fw-bold" htmlFor="confirmPassword">Confirmar Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="abc123"
                            {...register("confirmPassword", {
                                required: "Este campo es requerido" })}
                        />
                        {errors.confirmPassword && <span className="fw-bold text-danger">{errors.confirmPassword.message}</span>}
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" className="mt-3 mb-3">
                        Registrarse
                    </Button>
                </Form>
            )}
        </section>
    )
}
