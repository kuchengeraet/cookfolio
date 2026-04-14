import { useParams } from 'react-router'
import styles from "./recipe.module.css"
import { useState, useEffect } from "react";
import React from "react";
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'

function Recipe() {
    const [recipe, setRecipe] = useState();
    const { id } = useParams();

    useEffect(() => {
        import(`../../data/${id}.json`)
            .then((res) => setRecipe(res.default))
            .catch(_ => null);
    }, [id]);

    return (
        <>
            <Header />
            {recipe &&
                <Main>
                    <div className={styles.recipeContainer}>
                        <span className={styles.title}>{recipe.title}</span>
                        <div className={styles.labelContainer}>
                            {recipe.labels.map((label) => (
                                <span key={label} className={styles.label}>{label}</span>
                            ))}
                        </div>
                        <div className={styles.responsiveLayoutContainer}>
                            <div className={styles.sectionContainer}>
                                <span className={styles.sectionTitle}>Zutaten</span>
                                <div className={styles.ingredientsContainer}>
                                    {
                                        recipe.ingredients.map((ingredient, index) => (
                                            <React.Fragment key={`ingredient-${index}`}>
                                                <span className={styles.ingredientQuantity}>{ingredient.quantity}</span>
                                                <span className={styles.ingredientDescription}>{ingredient.description}</span>
                                            </React.Fragment>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={styles.sectionContainer}>
                                <span className={styles.sectionTitle}>Zubereitung</span>
                                {
                                    recipe.instructions.map((instruction) => (
                                        <p className={styles.instruction}>{instruction}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </Main>
            }
        </>

    )
}

export default Recipe