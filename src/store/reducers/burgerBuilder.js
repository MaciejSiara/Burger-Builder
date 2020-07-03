import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
   ingredients: null,
   totalPrice: 4,
   error: false,
};

const INGREDIENT_PRICES = {
   salad: 0.5,
   cheese: 0.4,
   bacon: 0.7,
   meat: 1.5,
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.ADD_INGREDIENT:
         return addIngredient(state, action);

      case actionTypes.REMOVE_INGREDIENT:
         return removeIngredient(state, action);

      case actionTypes.SET_INGREDIENTS:
         return setIngredients(state, action);

      case actionTypes.FETCH_INGREDIENTS_FAILED:
         return fetchIngredients(state, action);
         
      default:
         return state;
   }
};

const addIngredient = (state, action) => {
   const updatedIngredientAdd = {
      [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
   };
   const updatedIngredientsAdd = updateObject(
      state.ingredients,
      updatedIngredientAdd
   );
   const updateStateAdd = {
      ingredients: updatedIngredientsAdd,
      totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
   };
   return updateObject(state, updateStateAdd);
};

const removeIngredient = (state, action) => {
   const updatedIngredientRem = {
      [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
   };
   const updatedIngredientsRem = updateObject(
      state.ingredients,
      updatedIngredientRem
   );
   const updateStateRem = {
      ingredients: updatedIngredientsRem,
      totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
   };
   return updateObject(state, updateStateRem);
};

const setIngredients = (state, action) => {
   return updateObject(state, {
      ingredients: action.ingredients,
      error: false,
      totalPrice: initialState.totalPrice,
   });
};

const fetchIngredients = (state, action) => {
   return updateObject(state, { error: true });
};

export default reducer;
