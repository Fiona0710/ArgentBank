export async function fetchApi(url, method, body, requireToken = true) {
    const headers = {'Content-Type': 'application/json' };
        
     
    if (requireToken) {
    const token = window.localStorage.getItem('token');
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        } else {
            throw new Error('Token d\'authentification manquant');
        }
    }
    const response = await fetch(`http://localhost:3001/api/v1/user${url}`, {
      method: method,
      headers:headers,
      body: JSON.stringify(body)
    });
  
    if (response.status === 200) {
      const responseData = await response.json();
      return responseData;
    }
    else {
        throw new Error('Une erreur est survenue lors de la requête.');
      } 
  }



  
    
  