import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Nav from './parts/Nav'
import Modal from './parts/Modal'
import Home from './pages/Home'
import StripeResults from './pages/StripeResults'

export default function App() {
  const items = [
    { item: 'burger', price: 6.99, qty: 0 },
    { item: 'sandwitch', price: 4.99, qty: 0 },
    { item: 'pizza', price: 2.99, qty: 0 },
    { item: 'drink', price: 1.99, qty: 0 },
  ]

  const [cartProducts, setcartProducts] = useState(items)
  const [modalShow, setmodalShow] = useState(false)

  return (
    <div className='App'>
      <BrowserRouter>
        <Nav cartProducts={cartProducts} setmodalShow={setmodalShow} />
        <Modal
          cartProducts={cartProducts}
          modalShow={modalShow}
          setmodalShow={setmodalShow}
        />
        <Routes>
          <Route
            index
            element={
              <Home
                cartProducts={cartProducts}
                setcartProducts={setcartProducts}
              />
            }
          />
          <Route path='/success' element={<StripeResults />} />
          <Route path='/cancel' element={<StripeResults />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
