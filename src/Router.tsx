import { Routes, Route } from 'react-router-dom'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Checkout />}></Route>
      <Route path="/Checkout" element={<Checkout />}></Route>
      <Route path="/Success" element={<Success />}></Route>
    </Routes>
  )
}
