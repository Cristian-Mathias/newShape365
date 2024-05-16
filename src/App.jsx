import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './components/Login.jsx'
import Cadastro from './components/Cadastro.jsx'
import ProtectedRoutes from './Services/ProtectedRoutes.jsx'
import Home from './Pages/Home.jsx'
import Locais from './Pages/Locais.jsx'
import CadastroLocal from './Pages/CadastroLocal.jsx'

function App() {

  return (
    <>
      <Router>
        {/* <nav>
          <Link to='/login'>Login</Link>
          <Link to='/cadastro'>Cadastro</Link>
          <Link to='/home'>Home</Link>
        </nav> */}
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/' element={<ProtectedRoutes />}>
            <Route path='/' element={<Home />} />
            <Route path='/locais/' element={<Locais/>} />
            <Route path='/cadastrolocal' element={<CadastroLocal/>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}
export default App
