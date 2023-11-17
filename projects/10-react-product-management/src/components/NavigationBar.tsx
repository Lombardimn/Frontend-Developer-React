import { useAuth0 } from "@auth0/auth0-react"
import { Loader } from ".";


interface ButtonClasses {
  logged: string;
  unlogged: string;
}

export function NavigationBar () {
  const { isAuthenticated, loginWithRedirect, logout, isLoading, user } = useAuth0()

  const buttonClasses: ButtonClasses = {
    logged: "bg-green-400 p-2 w-28 rounded-lg box-content text-stone-950 font-medium shadow-xl cursor-pointer hover:bg-green-600 hover:outline-2 hover:outline hover:outline-green-400",
    unlogged: "bg-red-500 p-2 w-28 rounded-lg box-content text-gray-50 font-medium shadow-xl cursor-pointer hover:bg-red-600 hover:outline-2 hover:outline hover:outline-red-400"
  }

  if (isLoading) {
    return (
      <Loader />
    )
  }
  return (
    <header className="w-full md:w-auto bg-gray-800 text-white flex justify-between items-center">
        <h1 className="text-3xl font-bold m-8 w-[32rem]">Product Management</h1>
      <nav className="flex flex-row mr-8 justify-between w-full relative">
        <div className="flex items-center">
          <ul className="flex text-xl">
            <li className="mr-8 hover:text-cyan-400"><a href="/">Home</a></li>
            <li className="mr-8 hover:text-cyan-400"><a href="/products">Products</a></li>
          </ul>
        </div>
        <div className="flex items-center">
          {
            !isAuthenticated
              ? <button className={buttonClasses.logged} onClick={() => loginWithRedirect()}>Acceder</button>
              : <>
                  <p className="text-lg text-orange-400 mr-8"><a href="/profile">{user?.email}</a></p>
                  <button className={buttonClasses.unlogged} onClick={() => logout({ returnTo: "http://localhost:5173/" })}>Cerrar Sesion</button>
                </>
          }
        </div>
      </nav>
    </header>
  )
}
