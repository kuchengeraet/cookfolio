import Home from './Home'
import Recipe from './Recipe'
import { Route, Routes } from 'react-router'

function App() {

    return (
        <div>
            <Routes>
                <Route path="cookfolio/" element={<Home />} />
                <Route path="cookfolio/recipe/:id" element={<Recipe />} />
            </Routes>
        </div>
    )
}

export default App
