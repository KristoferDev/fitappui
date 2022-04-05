import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Hello world!");
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
      setShowSuccess(true);
    }
    setSubmitted(true);
    setValues({
      firstName: '',
      lastName: '',
      email: '',
    });
  }

  const handleFirstNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  };

  const handleLastNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  return (
    <div className='login'>
      <div className='login-wrapper'>
        <h1>Register</h1>
        <form className='register-form' onSubmit={handleSubmit}>
          {submitted && !values.firstName && <span id='first-name-error'>Please enter a first name</span>}
          <input
            id="first-name"
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleFirstNameInputChange}
          />

          {submitted && !values.lastName && <span id='last-name-error'>Please enter a last name</span>}
          <input
            id="last-name"
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleLastNameInputChange}
          />

          {submitted && !values.email && <span id='email-error'>Please enter an email address</span>}
          <input
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleEmailInputChange}
          />
          <br />
          <button className="form-field" type="submit">
            Register
          </button>
          {showSuccess && <div className='message success-message'>Success! Thank you for registering</div>}
        </form>
      </div>
    </div>
  )
}

export default Login;
