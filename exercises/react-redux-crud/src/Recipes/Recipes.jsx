import React from "react";
import {connect} from "react-redux";
import Recipe from "./Recipe/Recipe";

function Recipes (props){
    let {recipes} = props;
    let recipeComponents = recipes.map((recipe, i)=>{
        return <Recipe key={i + recipe.name}{...recipe} index={i} />
    })
    return (
        <div>
            {recipeComponents}
        </div>
    )
}

const mapStateToProps = state => {
    return { recipes: state.recipes}
}

export default connect(mapStateToProps, {})(Recipes);