import React from 'react'

const Pets = (props) => {
    const petInfo = props.info.map(pet=> {
        return <div>
                    <li>Name: {pet.name} Breed: {pet.breed}</li>
               </div>
    })
    console.log(petInfo)
    return (
        <div>
            <h4>Pets:</h4>
            <ul>
             {petInfo}
            </ul>
        </div>
    )
}

export default Pets;