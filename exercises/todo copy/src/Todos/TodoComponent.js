import React from 'react';

class TodoComponent extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        inputs: {
          title: this.props.info.title,
          description: this.props.info.description,
          price: this.props.info.price
        },
        isEditing: false
      }
    }
    
    handleChange = e => {
      this.setState(prevState => {
      return {
        inputs: {
          [e.target.name]: e.target.value 
        }
      }
    })

    }
    
    editMe = e => {
      this.setState({isEditing: !this.state.isEditing})
    }
    render(){
      let {title, description, price} = this.state.inputs;
      return (
          !this.state.isEditing ?
            <div>
                <h1>Title: {this.props.info.title}</h1>
                <p>Description: {this.props.info.description}</p>
                <p>Price: {this.props.info.price}</p>
                <button onClick={()=>this.props.handleDelete(this.props.info._id)} >Delete</button>
                <button onClick={this.editMe}>Edit</button>
            </div>
            
            :
            <form onSubmit={()=>this.props.handleEdit(this.state.inputs)}>
                  <label>
                      Title: 
                      <input name="title" value={title} onChange={this.handleChange} />
                  </label>
                  <button>Edit</button>
            </form>
      )
    }
    
}

export default TodoComponent;
