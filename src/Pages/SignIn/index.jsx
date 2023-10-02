import FormContainer from '../../components/FormContainer';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  
 async function submitForm(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
       
    try {
      const response =  await fetch (`http://localhost:3001/api/v1/user/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})  
          });

      if (response.status === 200) {
      
        const responseData = await response.json();
        const token = responseData.body.token;
         
        window.localStorage.setItem('token', token); 
        navigate("/User"); 
      } else {
        setError('Oups, il y a eu un problème');
      }
    } catch (error) {
      setError('Oups, il y a eu une erreur de réseau');
    }
   
}
            
    return (
      <FormContainer onSubmit={submitForm}>
        {error && <span>{error}</span>}
        <FormField
          className='input-wrapper'
          id='username'
          label='Email'
          type='text'
          name='email'
        />
        <FormField
          className='input-wrapper'
          id='password'
          label='Password'
          type='password'
          name='password'
        />
        <FormField
          className='input-remember'
          id='remember-me'
          label='Remember-me'
          type='checkbox'
        />
        <Button
          className='sign-in-button'
          name='Sign In'
          type='submit'  
        />
      </FormContainer>
    );
  }
