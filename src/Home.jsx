import recipes from './data'
import { Link } from 'react-router'

function Home() {

    return (
        <div>
            <h1>Meine Lieblingsrezepte</h1>
            {
                recipes.map(recipe => (
                    <p>
                        <Link key={recipe.id} to={"/cookfolio/recipe/" + recipe.id}>{recipe.title}</Link>
                    </p>
                )
                )
            }
        </div>
    )
}

export default Home