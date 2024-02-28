import Accounts from './components/Accounts/Accounts'
import Index from './components/Index/Index'
import SideBar from './components/SideBar/SideBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <main>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/category/:categoryId' element={<Accounts title={"Titulo"} />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
