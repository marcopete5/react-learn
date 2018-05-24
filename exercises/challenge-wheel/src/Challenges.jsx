import React from 'react'

class Challenges extends React.Component {

  

  render () {

    return (
      <div>
        <form>
          <h1>Add Challenge:</h1>
          <textarea rows='3' cols='60'/>
          <br />
          <button className='submitBtn'>SUBMIT</button>
        </form>
      </div>
    )
  }
}

export default Challenges;
