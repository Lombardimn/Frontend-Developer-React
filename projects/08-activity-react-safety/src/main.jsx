import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Animation.css'
import config from './utils/config.js'


const domainKey = config.VITE_REACT_APP_DOMAIN;
const clienIdKey = config.VITE_REACT_APP_CLIENTID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain = {domainKey}
    clientId={clienIdKey}
    authorizationParams={{
      redirect_uri: 'http://localhost:5173/callback'
    }}>
      <App />
    </Auth0Provider>
)
