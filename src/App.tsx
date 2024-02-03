import { useRoutes } from 'react-router-dom'
import routes from './routes'
import { Header } from './components/Header'
import { Footer } from 'antd/es/layout/layout'
import { Toaster } from 'react-hot-toast'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { User } from './types/auth'
import Loader from './components/Loader'

const App: React.FunctionComponent = () => {
  const getRoutes = useRoutes(routes)
  const [redirect, setRedirect] = useState(false)
  const user = useSelector<User>(state => state.auth.data)  
  useEffect(() => {

    setTimeout(() => {
      setRedirect(true)
    },1000)
  }, [])
 
  if(user && !redirect) { 
    return <Loader/>
  }
  return (
    <>
   <Header/>
   <Toaster position="top-right"/>
     {getRoutes}
     
     <Footer style={{ textAlign: 'center' }}>
            Expense Tracker ©{new Date().getFullYear()}
      </Footer>
    </>
  )
}

export default App
