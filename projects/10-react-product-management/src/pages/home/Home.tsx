import { useAuth0 } from "@auth0/auth0-react"

export function Home () {
  const { user } = useAuth0()
  
  return (
    <section className="mt-5 text-center">
      <h2 className="text-3xl font-bold m-8">Bienvenidos a la App</h2>
      <p className="text-lg opacity-70 w-96 m-auto pb-8">
        Esta aplicacion fue creada con React para la gestión de productos. Implementando con autenticación y seguridad de Auth0
      </p>
      <p>
        {
          user && (
            <div className="text-lg italic">{user.name} ({user.email})</div>
        )
        }
      </p>
    </section>
  )
}