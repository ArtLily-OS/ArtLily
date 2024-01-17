import { useState } from 'react';
import { signupFields } from '../constants/formFields';
import FormAction from './FormAction';
import Input from './Input';
//import { useHistory } from 'react-router-dom';

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ''));

export default function Signup() {
  //const history = useHistory();
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signupState['confirm-password'] === signupState.password) {
      console.log('ok');
      createAccount();
    } else {
      console.log('make ur passwords match');
    }
  };

  //handle Signup API Integration here
  const createAccount = async () => {
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupState),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Signup successful');
        history.push(data);
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Signup Error:', error);
    }
  };

  return (
    <div className="flex justify-center item-center">
    <form className="mt-8 max-w-md w-full space-y-6 " onSubmit={handleSubmit}>
      <div >
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
    </div>
  );
}
