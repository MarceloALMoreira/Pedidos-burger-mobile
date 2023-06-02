import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NewPedidos from '../pages/NewPedidos'
import ViewPedidos from '../pages/ViewsPedidos'




const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route index path='/' element={<NewPedidos />} />
                <Route  path='/pedidos' element={<ViewPedidos />} />
            </Routes>
        </Router>
    )
}
export default Rotas