'use client';

import React, { useState } from 'react';
import axios from 'axios';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/sendEmail', formData);
      setStatus(response.data.message);
    } catch (error) {
      setStatus('Error sending email');
    }
  };

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md'>
      <h2 className='text-2xl font-bold mb-6'>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            className='mt-1 p-2 w-full border border-gray-300 rounded-md'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='mt-1 p-2 w-full border border-gray-300 rounded-md'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-gray-700'
          >
            Message
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
            className='mt-1 p-2 w-full border border-gray-300 rounded-md'
          ></textarea>
        </div>
        <button
          type='submit'
          className='w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700'
        >
          Send Message
        </button>
      </form>
      {status && <p className='mt-4 text-center'>{status}</p>}
    </div>
  );
};

export default ContactForm;
