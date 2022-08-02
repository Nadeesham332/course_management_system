import Navbar from '../Navigation/Navbar.js';
import Footer from '../Footer/Footer.js';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from 'react';

const Catalogue = () => {

    const [acadamicYr, setAcadamicYr] = useState('2022/2021');

    // const acadamicYr= '2022/2021';


    return (
      
        <> 
        
        <Navbar/>

        <section >
            <ul >
        <label>Acadamic year: </label>
        <DropdownButton id="dropdown-basic-button" title={acadamicYr}>
      <Dropdown.Item value>2022/2021</Dropdown.Item>
      <Dropdown.Item >2021/2020</Dropdown.Item>
      <Dropdown.Item >2020/2019</Dropdown.Item>
    </DropdownButton></ul>
            </section>
        <Footer/>
        </>
       
        
    );
}

export default Catalogue;
