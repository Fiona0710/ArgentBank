import FormContainer from '../../components/FormContainer';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import { useSignIn } from '../../hooks/useSignIn';

export default function SignIn() {
  const { error, submitForm } = useSignIn();
           
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
