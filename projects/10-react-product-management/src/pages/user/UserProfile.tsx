import { useAuth0 } from "@auth0/auth0-react";

export function UserProfile () {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <span>Debes iniciar sesión para ver tu perfil.</span>;
  }

  return (
    <section className="mt-5 text-center">
      <div className="w-80 m-auto h-80 border-2 border-solid border-gray-800 rounded-xl shadow-xl flex flex-col justify-evenly place-items-center">
        <picture className="w-36 h-36">
          <img
            className="rounded-full w-full h-full object-cover" 
            src={user?.picture} 
            alt="user profile" 
          />
        </picture>
        <div>
          <h2 className="text-2xl font-medium">{user?.name}</h2>
          <p className="text-lg opacity-70">Email: {user?.email}</p>
        </div>
      </div>
    </section>
  )
}
