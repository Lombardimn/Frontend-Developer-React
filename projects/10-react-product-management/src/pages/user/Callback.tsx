import { useAuth0 } from "@auth0/auth0-react"
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"
import { Loader } from "../../components"

export const Callback = () => {
  const { handleRedirectCallback } = useAuth0()
  const navigate = useNavigate()
  
  useEffect(() => {
      const processAuthentication = async () => {
          await handleRedirectCallback();
          navigate('/')
      }

      processAuthentication()
  }, [handleRedirectCallback, navigate])

  return <Loader />
}