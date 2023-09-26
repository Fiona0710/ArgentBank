import FormContainer from '../../components/FormContainer'
import FormField from '../../components/FormField';
import Button from '../../components/Button';

export default function SignIn() {
    return (
      <FormContainer>
        <FormField
          className='input-wrapper'
          id='username'
          label='Username'
          type='text'
        />
        <FormField
          className='input-wrapper'
          id='password'
          label='Password'
          type='password'
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
        />
      </FormContainer>
    );
  }
  