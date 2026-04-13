import recipes from '../../data'
import { Link } from 'react-router'
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import styles from "./home.module.css"

function Home() {
    return (
        <>
            <Header />
            <Main backgroundColor="var(--color-background)">
                <div className={styles.collectionContainer}>
                    {recipes.map((recipe) => (
                        <Link key={recipe.id} className={styles.link} to={`/cookfolio/recipe/${recipe.id}`}>
                            <div className={styles.collectionItem}>
                                <span className={styles.title}>{recipe.title}</span>
                                <div className={styles.labelContainer}>
                                    {recipe.labels.map((label) => (
                                        <span key={label} className={styles.label}>{label}</span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Main>
        </>
    )
}

export default Home