import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Venue from './pages/Venue'
import WhereToStay from './pages/WhereToStay'
import ThingsToDo from './pages/ThingsToDo'
import Faq from './pages/Faq'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/where-to-stay" element={<WhereToStay />} />
        <Route path="/things-to-do" element={<ThingsToDo />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App