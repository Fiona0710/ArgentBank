import Button from '../../components/Button'
import Account from '../../components/Account';
import accountInformation from '../../data/accountInformation';
// import { useDataProfile } from '../../hooks/useProfile';
import { profilFetch } from '../../services/UserService';
import { useDispatch, useSelector } from 'react-redux'; 
import { userProfile } from '../../redux/profileSlice';
import { selectUserData } from '../../redux/selectors';
import { selectAuthToken } from '../../redux/selectors';

  
export default function User() {
  // const data = useSelector(selectUserData)
  //   console.log(data)
  // const {fetchData } = useDataProfile();
  // fetchData();
 const data = useSelector(selectUserData)
  console.log(data) 
  
  async function fetchData() {
  const token = useSelector(selectAuthToken);
    const dispatch = useDispatch();
     try {
       const userData = await profilFetch(token);

        console.log(userData)
        dispatch(userProfile(userData.body))
      }   
      catch (error) {
       // Gérer les erreurs
     }
   }

fetchData()

    return (
      <div  className='main bg-dark'>
      <div className="header">
        <h1>Welcome back<br />{data.firstName} {data.lastName}</h1>
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
      </div>
    );
  }


