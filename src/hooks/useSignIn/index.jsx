import { useState } from 'react';
import { signInFetch } from '../../services/UserService';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/tokenSlice';

export function useSignIn() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  async function submitForm(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const token = await signInFetch(email, password);

      if (token) {
        setError(null);
        console.log(token)
        dispatch(setToken({token}))
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