import Home from './routes/home/Home'
import Recipe from './routes/recipe/Recipe'
import { Route, Routes } from 'react-router'

function App() {

    return (
        <Routes>
            <Route path="cookfolio/" element={<Home />} />
            <Route path="cookfolio/recipe/:id" element={<Recipe />} />
        </Routes>
    )
}

export default App
