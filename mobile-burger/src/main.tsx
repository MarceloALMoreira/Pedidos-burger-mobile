import React from 'react'
import ReactDOM from 'react-dom/client'
import Rotas from './routes/routes'
import GlobalStyle from './styles/globalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Rotas />
  </React.StrictMode>,
)
