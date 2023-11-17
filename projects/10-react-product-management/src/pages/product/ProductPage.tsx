import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { Loader } from "../../components";
import { ProductForm } from "./ProductForm";
import { toast } from "sonner";

import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Title,
  Badge,
} from "@tremor/react";


interface Product{
  id: number
  nombre: string
  precio: number
  categoriaId: number
  stock: number
  categoria: string
}

export function ProductPage () {
  const [products, setProducts] = useState<Product[]>([]);
  const [showModal, setShowModal] = useState<true | false>(false);
  const [loading, setLoading] = useState<true | false>(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { getAccessTokenSilently } = useAuth0();

  const fetchProducts = async () => {
    try {
      const token = await getAccessTokenSilently();
  
      console.log("ID Token:", token);
  
      const response = await fetch(
        "https://backend-productos.netlify.app/api/productos",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (!response.ok) {
        throw new Error("Hubo un problema al obtener los datos");
      }
  
      const data = await response.json();
      setProducts(data);
      setLoading(false);
      toast.success("Se han cargado los productos");
    } catch (error) {
      toast.error("Hubo un error al cargar los productos");
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleShowModal = () => {
    setSelectedProduct(null)
    setShowModal(true)
    fetchProducts()
  }

  const handleCloseModal = () => {
    setShowModal(false)
    fetchProducts()
  };

  const handleEditButtonClick = (product: Product) => {
    setSelectedProduct(product)
    setShowModal(true)
  };

  const handleDeleteClick = (product: Product) => {
    fetch(`https://backend-productos.netlify.app/api/productos/${product.id}`, {
      method: 'DELETE'
    })
      .then((response) => {
        if (response.ok) {
          toast.success("El producto se ha eliminado correctamente.")
          fetchProducts()
        } else {
          throw new Error('Hubo un error al eliminar el producto.')
        }
      })
      .catch((error) => {
        toast.error(error.message)
        console.error(error)
      })
  }


  return (
    <>
      {
        loading
          ?( <Loader />)
          : (
            <>
              <div>
                <button 
                  className="bg-blue-700 p-2 flex ml-16 rounded-lg box-content text-gray-50 font-medium shadow-xl cursor-pointer hover:bg-blue-400 hover:outline-2 hover:outline hover:outline-blue-700 hover:text-black"
                  onClick={handleShowModal}
                >
                  Agregar Producto
                </button>
              </div>
              <div>
                <Card className="mt-5 mx-auto p-5 w-11/12 shadow-lg rounded mb-5 border-slate-600 ring-slate-300">
                  <Title className="text-xl font-bold text-orange-600 shadow-sm flex justify-start items-center">
                    Lista de Productos
                    <Badge className="bg-cyan-400 text-zinc-950 rounded-full m-2 h-6 w-6">
                      {products.length}
                    </Badge>
                  </Title>
                    <div className="w-full h-0.5 bg-gray-800"></div>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableHeaderCell className="text-left">ID</TableHeaderCell>
                        <TableHeaderCell className="text-left w-64">Nombre</TableHeaderCell>
                        <TableHeaderCell className="text-left">Precio ($)</TableHeaderCell>
                        <TableHeaderCell className="text-left">Categoría</TableHeaderCell>
                        <TableHeaderCell className="text-left">Stock</TableHeaderCell>
                        <TableHeaderCell className="text-left">Acciones</TableHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {products.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="whitespace-normal w-28">{item.id}</TableCell>
                          <TableCell className="flex items-center">{item.nombre}</TableCell>
                          <TableCell className="text-left">{item.precio}</TableCell>
                          <TableCell className="text-left">{item.categoria}</TableCell>
                          <TableCell className="text-left">{item.stock}</TableCell>
                          <TableCell className="text-left">
                            <button 
                              onClick={() => handleEditButtonClick(item)}
                              type="button">
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="w-6 h-6 mx-2"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" 
                                />
                              </svg>
                            </button>
                            <button 
                              onClick={() => handleDeleteClick(item)}
                              type="button">
                              <svg
                                aria-label="Remove element"
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="w-6 h-6"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" 
                                />
                              </svg>
                            </button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
                {
                  showModal && (
                    <ProductForm
                      showModal={showModal}
                      handleClose={handleCloseModal}
                      product={selectedProduct}
                    />
                  )
                }
              </div>
            </>
          )
      }
    </>
  )
}