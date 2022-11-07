import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilState } from 'recoil'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilState>
      <App />
    </RecoilState>
  </React.StrictMode>
)
