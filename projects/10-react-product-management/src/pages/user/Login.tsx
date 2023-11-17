import { useAuth0 } from "@auth0/auth0-react"

export function Login () {
  const { loginWithRedirect } = useAuth0()

  return (
      <section>
        <div>
          <h2 className="text-3xl font-bold m-8">Iniciar Sesión</h2>
          <p className="text-lg opacity-70 w-96 m-auto pb-8">
            Por favor, haz click en el siguiente botón para iniciar sesión:
          </p>
          <button
            className="bg-green-400 p-2 w-48 mt-2 rounded-lg box-content text-stone-950 font-medium shadow-xl cursor-pointer hover:bg-green-600 hover:outline-2 hover:outline hover:outline-green-400"
            onClick={() => loginWithRedirect()}
          >
            Iniciar Sesión con Auth0
          </button>
        </div>
      </section>
  )
}