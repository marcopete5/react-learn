const reducer = (prevState=[], action) => {
    switch(action.type){
        case "ADD_RECIPE":
            return [...prevState, action.recipe];
        case "EDIT_RECIPE":
            return [...prevState].map((recipe, i) => i === action.index ? action.changedRecipe : recipe);
        case "REMOVE_RECIPE":
            return [...prevState].filter((recipe,i) => i !== action.index);
        default:
            return prevState;
    }
}

export const addRecipe = (recipe) => {
    return {
        type: "ADD_RECIPE",
        recipe
    }
}

export const editRecipe = (changedRecipe, index) => {
    return {
        type: "EDIT_RECIPE",
        index,
        changedRecipe
    }
}

export const removeRecipe = index => {
    return {
        type: "REMOVE_RECIPE",
        index
    }
}

export default reducer;