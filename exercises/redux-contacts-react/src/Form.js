import React from 'react';

const Form = ({name, phone, email, handleChange, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} >
          <input type="text" value={name} name='name' placeholder='Name'  onChange={handleChange}  />
          <input type="phone" value={phone} name='phone' placeholder='Phone Number' onChange={handleChange}  />
          <input type="email" value={email} name='email' placeholder='Email Address' onChange={handleChange}  />
          <button>Submit</button>
        </form>
    );
};

export default Form;