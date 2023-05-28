import React from 'react';

const Form = ({ formFields, setFormFields }) => {
  const { name, email, phone, address } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <form className='flex flex-col'>
      <div className='flex flex-col my-3 mx-5 gap-2'>
        <label>Name:</label>
        <input
          className='border w-[80%] rounded-md h-10 p-3'
          placeholder='Your name'
          type='text'
          required
          value={name}
          onChange={handleChange}
          name='name'
        />
      </div>
      <div className='flex flex-col my-3 mx-5 gap-2'>
        <label>Email:</label>
        <input
          className='border w-[80%] rounded-md h-10 p-3'
          placeholder='Your email'
          type='email'
          required
          value={email}
          onChange={handleChange}
          name='email'
        />
      </div>
      <div className='flex flex-col my-3 mx-5 gap-2'>
        <label>Phone:</label>
        <input
          className='border w-[80%] rounded-md h-10 p-3'
          placeholder='Your phone'
          type='text'
          required
          value={phone}
          onChange={handleChange}
          name='phone'
        />
      </div>
      <div className='flex flex-col my-3 mx-5 gap-2'>
        <label>Address:</label>
        <input
          className='border w-[80%] rounded-md h-10 p-3'
          placeholder='Your address'
          type='text'
          required
          value={address}
          onChange={handleChange}
          name='address'
        />
      </div>
    </form>
  );
};

export default Form;
