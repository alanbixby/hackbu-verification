import React from 'react'
import ReactDOM from 'react-dom'
import GoogleLogin from './GoogleButton'
import DiscordLogin from './DiscordButton'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <GoogleLogin />
    <DiscordLogin />
  </React.StrictMode>,
  document.getElementById('root')
)
