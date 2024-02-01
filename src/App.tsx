import { useRoutes } from 'react-router-dom'
import routes from './routes'
import { Header } from './components/Header'
import { Footer } from 'antd/es/layout/layout'

const App: React.FunctionComponent = () => {
  const getRoutes = useRoutes(routes)

  return (
    <>
   <Header/>
     {getRoutes}
     
     <Footer style={{ textAlign: 'center' }}>
            Expense Tracker ©{new Date().getFullYear()}
      </Footer>
    </>
  )
}

export default App
