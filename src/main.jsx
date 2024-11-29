import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StoreContextProvider from './context/StoreContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StoreContextProvider>
    <App />
  </StoreContextProvider>
)
