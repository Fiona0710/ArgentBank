import { fetchApi } from '../../utils/fetchApi';

export async function signInFetch(email, password) {
  const responseData = await fetchApi('/login', 'POST', { email, password }, false);
  
  const token = responseData.body.token;
  window.localStorage.setItem('token', token);
  
  return true;
}