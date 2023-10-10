import { fetchApi } from '../../utils/fetchApi';

export async function signInFetch(email, password) {

  const responseData = await fetchApi(
    '/login',
    'POST', 
    { email, password },
    null, 
    false);
  const token = responseData.body.token;
  return token;
}


export async function profilFetch(token) {
  const profileData = await fetchApi (
    '/profile', 
    'POST', 
    {},
    token, 
    true )
  const data = profileData;
   console.log(data)
  return data
 

}