import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Venue from './pages/Venue'
import WhereToStay from './pages/WhereToStay'
import ThingsToDo from './pages/ThingsToDo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/where-to-stay" element={<WhereToStay />} />
        <Route path="/things-to-do" element={<ThingsToDo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App