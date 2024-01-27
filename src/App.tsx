import { useRoutes } from 'react-router-dom'
import routes from './routes'
 

const App: React.FunctionComponent = () => {
  const getRoutes = useRoutes(routes)

  return (
    <>
     {getRoutes}
    </>
  )
}

export default App
