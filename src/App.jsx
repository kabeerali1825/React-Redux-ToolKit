import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {

  return (
    <>
      <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/Cart' element={<Cart></Cart>}/>
        </Routes>
        </BrowserRouter>
        </Provider>
    </>
  )
}

export default App
