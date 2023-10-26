import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Animation.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain='dev-5ayui65dej1h8mbc.us.auth0.com'
    clientId='40dcWSXUyjfFH5CMYASCU50ooGxAgBWR'
    authorizationParams={{
      redirect_uri: 'http://localhost:5173/callback'
    }}>
      <App />
    </Auth0Provider>
)
