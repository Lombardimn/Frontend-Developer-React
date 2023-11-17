import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { toast } from "sonner";

export function ProductForm ({ showModal, handleClose, product }) {
    const {
      register,
      handleSubmit,
      control,
      formState: { errors },
    } = useForm({
      defaultValues: {
        categoriaId: product ? product.categoriaId?.toString() : "1"
      }
    })

    useEffect(() => {
      fetch("https://backend-productos.netlify.app/api/categorias")
        .then((response) => response.json())
        .then((data) => {
          setCategorias(data);
        })
        .catch((error) => console.error(error));
    }, []);

    const onSubmit = (data) => {
      data.categoriaId = parseInt(data.categoriaId);
      if (product) {
        // Actualización del producto
        fetch(`https://backend-productos.netlify.app/api/productos/${product.id}`, {
          method: 'PUT',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Error en la solicitud');
            }
          })
          .then((data) => {
            console.log(data);
            toast.success("El producto se ha actualizado correctamente.");
            handleClose();
          })
          .catch((error) => {
            console.error(error);
            toast.error("Hubo un error al actualizar el producto");
          });
      } else {
        // Creación del producto
        fetch("https://backend-productos.netlify.app/api/productos", {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Error en la solicitud');
            }
          })
          .then((data) => {
            console.log(data);
            toast.success("El producto se ha creado correctamente.");
            handleClose();
          })
          .catch((error) => {
            console.error(error);
            toast.error("Hubo un error al crear el producto");
          });
      }
    };

    const [categorias, setCategorias] = useState([]);

  return (
    <Modal show={showModal} onHide={handleClose} className="mt-28">
        <Modal.Header closeButton>
          <Modal.Title className="font-bold text-2xl">
            {product ? "Editar Producto" : "Agregar Producto"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="productName">
              <Form.Label className="font-medium text-lg opacity-80">Nombre</Form.Label>
              <Form.Control
                className="mb-3"
                type="text"
                {...register("nombre", { required: true })}
                defaultValue={product ? product.nombre : ""}
              />
              {errors.nombre && <span className="text-red-600">El nombre es requerido</span>}
            </Form.Group>
            <Form.Group controlId="productPrice">
              <Form.Label className="font-medium text-lg opacity-80">Precio</Form.Label>
              <Form.Control
                className="mb-3"
                type="number"
                {...register("precio", { required: true })}
                defaultValue={product ? product.precio : ""}
              />
              {errors.precio && <span className="text-red-600">El precio es requerido</span>}
            </Form.Group>
            
            <Form.Group controlId="productCategory">
              <Form.Label className="font-medium text-lg opacity-80">Categoría</Form.Label>
              <Controller
                name="categoriaId"
                control={control}
                render={({ field }) => (
                  <Form.Select {...field} className="mb-6 text-sm font-mono">
                    {categorias.map((categoria) => (
                      <option key={categoria.id} value={categoria.id}>
                        {categoria.nombre}
                      </option>
                    ))}
                  </Form.Select>
                )}
              />
              {errors.categoria && <span className="text-red-600">La categoría es requerida</span>}
            </Form.Group>
            <Form.Group controlId="productStock">
              <Form.Label className="font-medium text-lg opacity-80">Stock</Form.Label>
              <Form.Control
                type="number"
                {...register("stock", { required: true })}
                defaultValue={product ? product.stock : ""}
              />
              {errors.stock && <span className="text-red-600">El stock es requerido</span>}
            </Form.Group>
            <Button
              className="bg-blue-700 p-2 mt-4 rounded-lg box-content text-gray-50 font-medium shadow-xl cursor-pointer hover:bg-blue-400 hover:outline-2 hover:outline hover:outline-blue-700 hover:text-black"
              variant="primary"
              type="submit"
            >
              Guardar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
  )
}