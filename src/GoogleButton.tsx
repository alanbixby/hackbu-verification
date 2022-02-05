import React, { useState } from 'react'
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'

export default function GoogleLoginButton () {
  const [googleProfile, setGoogleProfile] = useState(
    localStorage.getItem('googleProfile')
      ? JSON.parse(localStorage.getItem('googleProfile') as string)
      : null
  )

  const [googleData, setGoogleData] = useState(
    localStorage.getItem('googleData')
      ? JSON.parse(localStorage.getItem('googleData') as string)
      : null
  )

  const handleFailure = (err: any) => {
    if (err.error === 'popup_closed_by_user') {
      alert('hi ' + JSON.stringify(err))
      return
    }
    alert(JSON.stringify(err))
  }

  const handleLogin = async (googleData: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const { profileObj } = (googleData as GoogleLoginResponse)
    console.log(profileObj)
    setGoogleProfile(profileObj)
    setGoogleData(googleData)
    localStorage.setItem('googleProfile', JSON.stringify(profileObj))
    localStorage.setItem('googleData', JSON.stringify(googleData))
  }

  const handleLogout = () => {
    console.log(googleData)
    localStorage.removeItem('googleProfile')
    setGoogleProfile(null)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Google Login App</h1>
        <div>
          {googleProfile
            ? (
            <div>
              <h3>You logged in as {googleProfile.email}</h3>
              <button onClick={handleLogout}>Logout</button>
            </div>
              )
            : (
            <GoogleLogin
              clientId="552585066521-r2c3o1fjn43ln9hh9v3dh92g9j2gqoc6.apps.googleusercontent.com"
              buttonText="Connect your Binghamton University email"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              hostedDomain="binghamton.edu"
              cookiePolicy={'single_host_origin'}
              prompt={'select_account'}
              disabled={false}
            ></GoogleLogin>
              )}
        </div>
      </header>
    </div>
  )
}
