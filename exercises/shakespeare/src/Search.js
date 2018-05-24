import React from 'react'

class Search extends React.Component {
  render () {
    return (
        <div>
          <form>
            <input
              type="text"
              onChange={this.props.onChange}
              value={this.props.value}
            />
          </form>
        </div>
    )
  }
}

export default Search;
