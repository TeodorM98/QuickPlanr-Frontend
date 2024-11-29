import React, {useState} from 'react'
import SubmitButton from "./SubmitButton";
import FormInput from "./FormInput";
import { Link } from 'react-router-dom';

export default function RegisterForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    firstName: "",
    lastName: "",
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
    if(form.password !== form.repeatPassword)
      alert("Passwords don't match.")
  };

  return (
    <form
      className="flex flex-col bg-gray-600 justify-items-center space-y-4 border-4 p-3 border-gray-700 rounded-lg"
      onSubmit={handleSubmit}
    >
      <FormInput
        type="text"
        label="First name: "
        name="firstName"
        onChange={handleChange}
        pattern='[a-zA-Z]'
      />
      <FormInput
        type="text"
        label="Last name: "
        name="lastName"
        onChange={handleChange}
        pattern='[a-zA-Z]'
      />
      <FormInput
        type="email"
        label="Email: "
        name="email"
        onChange={handleChange}
      />
      <FormInput
        type="password"
        label="Password: "
        name="password"
        onChange={handleChange}
        minlength={8}
      />
      <FormInput
        type="password"
        label="Repeat password: "
        name="repeatPassword"
        onChange={handleChange}
        minlength={8}
      />
      <SubmitButton value="Register" />
      <Link to="/login" className="text-orange-500 underline">Already have an account?</Link>
    </form>
  );
}