
import './App.css';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import { useEffect, useState } from 'react';

const toGetFromLocalStorage = () => {
  const gettingData = localStorage.getItem('add');
  if (gettingData) {
    return JSON.parse(gettingData)
  } else {
     return []
  }
}

function App() {
 
  const [userDetails, setUserDetails] = useState({ firstName: '', lastName: '', age: '', phoneNo: '', email: '', password: '', gender: '', terms: false })
  const [showTable,setShowTable]=useState(false)
  const [actualUserDetails, setActualUserDetails] = useState(toGetFromLocalStorage())
const [clear,setClear]=useState(false)
useEffect(() => {
 localStorage.setItem('add',JSON.stringify(actualUserDetails))

}, [actualUserDetails])
  return (

    <div className="App">
      <div className='container-fluid mt-5'>
        <div className='row'>
          <div className='col-md-5'>
            <UserForm userDetails={userDetails} setUserDetails={setUserDetails} actualUserDetails={actualUserDetails} setActualUserDetails={setActualUserDetails} setShowTable={setShowTable} />
          </div>
          <div className='col-md-7'>
          <UserTable actualUserDetails={actualUserDetails} setActualUserDetails={setActualUserDetails}/>
{/* {showTable?<UserTable actualUserDetails={actualUserDetails}/>:null} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
