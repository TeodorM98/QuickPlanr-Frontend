import React, { useState } from 'react'
import SubmitButton from './SubmitButton'
import FormInput from './FormInput';
import { Link } from 'react-router-dom';
import "../index.css"

export default function LoginForm(){

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  };

    return (
       <form className="flex flex-col bg-gray-600 justify-items-center space-y-4 border-4 p-3 border-gray-700 rounded-lg" onSubmit={handleSubmit}>
         <FormInput
        type="text"
        label="Email: "
        name="email"
        onChange={handleChange}
      />
      <FormInput
        type="password"
        label="Password: "
        name="password"
        onChange={handleChange}
      />
        <SubmitButton value="Login"  />
        <Link to="/register" className="text-orange-500 underline">Don't have an account?</Link>
      </form>
    )
}