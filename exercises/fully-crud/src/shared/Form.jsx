import React from 'react'

class Form extends React.Component {
  constructor(props){
    super(props);

    let {title, description, imgUrl, price, completed} = props;

    this.state = {
      inputs: {
        title: title ||'',
        description: description || '',
        imgUrl: imgUrl || '',
        price: price || 0,
        completed: completed || false
      }
    }
  }

  handleChange = e => {
    let {name, value, checked, type} = e.target;
    this.setState((prevState) => {
      return {
        inputs: {
          ...prevState.inputs,
          [name]: type === 'checkbox' ? checked: value
        }
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.submit(this.state.inputs, this.props.index);
    this.props.clear ? this.clearInputs(): null;
  }

  clearInputs = () => {
    this.setState({
      inputs: {
        title: '',
        description: '',
        imgUrl: '',
        price: 0,
        completed: false
      }
    })
  }

  render () {
    let {title, description, imgUrl, price, completed} = this.state;
    console.log(this.state.inputs);
      return (
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={title} name='title' type="text" placeholder='title'/>
          <input onChange={this.handleChange} value={description} name='description' type="text" placeholder='description'/>
          <input onChange={this.handleChange} value={imgUrl} name='imgUrl' type="text" placeholder='image'/>
          <input onChange={this.handleChange} value={price} name='price' type="number" placeholder='price'/>
          <label htmlFor="completed">
            Completed:
            <input onChange={this.handleChange} checked={completed} name='completed' id='completed' type="checkbox"/>
          </label>
          <button>Submit</button>
        </form>
      )
  }
}

export default Form;
