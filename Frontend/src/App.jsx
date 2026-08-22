import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import CreatePost from './Pages/CreatePost'
import Feed from './Pages/Feed'
const App = () => {
  return (

    
      <Routes>
        <Route path='/' element={<CreatePost />} />
        <Route path='/Feed' element={<Feed />} />
      </Routes>
    
  )
}

export default App