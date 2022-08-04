// import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../../Navigation/Loggedin_Navbar';

function Department() {
    
  const {id} = useParams();
  const [dept,setDept]=useState('');
  // console.log(params); // 👉️ {userparams: '4200'}

  useEffect(() => {
    //get data in the session
    if(id==='com'){
      setDept('Computer Department')
    }
    else if(id==='mech'){
      setDept('Interdiciplinary Studies')
    }
    else if(id==='elec'){
      setDept('Electrical and Electonic Department')
    }
    else if(id==='civil'){
      setDept('Civil and Environmental Department')
    }
    else{
      window.location.href='/not_found'
    }
  }, []);


    return (
      <>
<Navbar/>
<br/>
    <h3  className='text-center'>Courses of {dept}</h3>
    </>)
  }

  export default Department;