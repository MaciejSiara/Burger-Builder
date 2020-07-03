import React from "react";
import styles from "../../styles/Order.module.css";

export default function Order(props) {
   const ingredients = [];
   for (let ingredientName in props.ingredients) {
      ingredients.push({
         name: ingredientName,
         amount: props.ingredients[ingredientName],
      });
   }

   const displayIngredients = ingredients.map(ing => {
      return (
         <p className={styles.Ingredient} key={ing.name}>
            {ing.name}: {ing.amount}
         </p>
      );
   });

   return (
      <div className={styles.Order}>
         <p>Ingredients: </p>
         {displayIngredients}
         <p>
            Price: <strong>{props.price} PLN</strong>
         </p>
      </div>
   );
}
