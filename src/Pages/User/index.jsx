import Button from '../../components/Button'
import Account from '../../components/Account';
import accountInformation from '../../data/accountInformation';
import { profilFetch } from '../../services/UserService';
import { useDispatch, useSelector } from 'react-redux'; 
import { userProfile } from '../../redux/profileSlice';
//   import { selectUserData } from '../../redux/selectors';
  // import { useEffect } from 'react';

   
   

  
export default function User() {
async function fetchData() {
    const dispatch = useDispatch();
     try {
       const userData = await profilFetch();

        console.log(userData)
        dispatch(userProfile(userData))
      
    
      }  
      
       
      catch (error) {
       // Gérer les erreurs
     }
   }

fetchData()
 
 


  

// {data.firstName} {data.lastName}

    return (
      <>
      <div className="header">
        <h1>Welcome back<br /></h1>
        <Button
          className={'edit-button'}
          name={'Edit Name'}
        />
      </div>
      <h2 className="sr-only">Accounts</h2>
      {accountInformation.map((info, index) => (
          <Account
            key={index} 
            title={info.title}
            amount={info.amount} 
            description={info.description} 
          >
            <Button
              className={'transaction-button'}
              name={'View transactions'}
             />
          </Account>    
        ))}  
      </>
    );
  }


