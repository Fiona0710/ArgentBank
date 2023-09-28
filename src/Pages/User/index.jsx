import Button from '../../components/Button'
import Account from '../../components/Account';
import accountInformation from '../../data/accountInformation';

export default function User() {
    return (
      <>
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
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


