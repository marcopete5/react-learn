export function addContact(contact){
    return {
        type: 'ADD_CONTACT',
        contact
    }
}

export function deleteContact(id){
    return {
        type: 'DELETE_CONTACT',
        id
    }
}

export default function reducer(prevState={contactList:[]}, action){
    switch(action.type){
        case 'ADD_CONTACT':
            return {
                contactList: [...prevState.contactList, action.contact]
            }
        case 'DELETE_CONTACT':
            return {
                contactList: prevState.contactList.filter(contact => contact.id !== action.id)
            }
        default:
            return prevState;
    }
}
