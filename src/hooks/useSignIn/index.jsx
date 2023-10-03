import { useState } from 'react';
import { signInFetch } from '../../services/UserService';
import { useNavigate } from 'react-router-dom';

export function useSignIn() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function submitForm(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const success = await signInFetch(email, password);

      if (success) {
        setError(null);
        navigate("/User");
      } else {
        setError('Oups, il y a eu un problème');
      }
    } catch (error) {
      setError('Oups, il y a eu une erreur de réseau');
    }
  }

  return { error, submitForm };
}