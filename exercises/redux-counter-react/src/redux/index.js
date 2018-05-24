export function addOne(){
    return {
        type: "ADD_ONE"
    }
}

export function subtractOne(){
    return {
        type: "SUBTRACT_ONE"
    }
}

export function updateNumber(num){
    return {
        type: "UPDATE_NUMBER",
        num
    }
}

//Reducer

export default function reducer(prevState = {counter: 0}, action){
    switch(action.type){
        case "ADD_ONE":
            return {
                counter: prevState.counter + 1
            }
        case "SUBTRACT_ONE":
            return {
                counter: prevState.counter - 1
            }
        case "UPDATE_NUMBER":
            return {
                counter: action.num
            }
        default:
            return prevState;
    }
}
