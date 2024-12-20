import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from './redux/store.js'

createRoot(document.getElementById('root')).render(

  <HashRouter>
    <Provider store={Store}>
      <StrictMode>
        <App />
      </StrictMode>,
    </Provider>
  </HashRouter>
)
