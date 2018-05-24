
const state = {
    people: [{
        id: 1,
        name: "Tommy Oliver",
        phone: "925-867-5309",
        email: "thegreenranger@powerrangers.com"
    }]
}


export function addNew(person){
  return {
    type: "ADD_NEW",
    person
  }
}

export function removePerp(id){
  return {
    type: 'REMOVE_PERP',
    id
  }
}

export default function reducer(prevState=state, action){
  switch(action.type){
    case "ADD_NEW":
      return {
        people: [...prevState.people, action.person]
      };
    case "REMOVE_PERP":
      const old = prevState.people;
      return {
        people: old.filter(item=> item.id !== action.id)
      };
    default:
      return prevState
  }
}

