import { useState } from 'react';
import { loginFields } from '../constants/formFields';
import FormAction from './FormAction';
import FormExtra from './FormExtra';
import Input from './Input';
//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ''));

export default function Login() {
  //const history = useHistory();
  const [loginState, setLoginState] = useState(fieldsState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = async () => {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    console.log(username, password);
    try {
      const response = await fetch('http://localhost:3000', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      console.log(response);
      if (response.status === 200) {
        console.log('response is good, redirecting...');
        return navigate('/home');
      }
      // const data = await response.json();
      // console.log(data);
      // if (response.ok) {
      //   console.log('Login Successful:', data);
      //   // history.push(data);
      // } else {
      //   console.log('Login Failed:', data);
      // }
    } catch (error) {
      console.log('Login Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center py-2 px-4 :px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6">
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="-space-y-px">
            {fields.map((field) => (
              <Input
                key={field.id}
                handleChange={handleChange}
                value={loginState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            ))}
          </div>

          <FormExtra />
          <FormAction handleSubmit={handleSubmit} text="Login" />
        </form>
      </div>
    </div>
  );
}
