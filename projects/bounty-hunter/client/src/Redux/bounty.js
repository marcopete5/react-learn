const reducer = (prevState=[], action) => {
  switch(action.type){
    case "ADD_BOUNTY":
        return [...prevState, action.bounty];
    default:
        return prevState;
  }
}

export const addBounty = (bounty) => {
  return {
    type: "ADD_BOUNTY",
    bounty
  }
}

export default reducer;
