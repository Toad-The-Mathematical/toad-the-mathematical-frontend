import { FC, Fragment, useState } from 'react'
import './assets/styles/app.css'
import './assets/styles/app.scss'
import LoginPage from './pages/Login'

const App: FC = () => {
  const [fullname] = useState('Dư Thanh Được')
  console.log(fullname)
  return (
    <Fragment>
      <LoginPage />
    </Fragment>
  )
}

export default App
