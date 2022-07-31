import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
    
      <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='6' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>CONTACT</h5>

              <ul className='list-unstyled mb-0'>
              <li className='text-white'>
                <MDBIcon icon="home" className="me-2" />
                Ariviyal Nagar, Killinochchi, Sri Lanka
              </li>
              
              <li className='text-white'>
              <MDBIcon icon="envelope" className="me-3" />
                <a href='https://www.eng.jfn.ac.lk/admin@eng.jfn.ac.lk' className='text-white'>
                admin@eng.jfn.ac.lk
                  </a>
              </li>
             
              <li className='text-white'>
                <MDBIcon icon="phone" className="me-3" />+94-021-2062161
              </li>
              <li className='text-white'>
                <MDBIcon icon="print" className="me-3" />+94-021-2062161
              </li>
                {/* <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li> */}
              </ul>
            </MDBCol>

            <MDBCol lg='5' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>External Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='http://www.jfn.ac.lk' className='text-white'>
                    University Of Jaffna
                  </a>
                </li>
                <li>
                  <a href='https://www.eng.jfn.ac.lk/' className='text-white'>
                    Faculty of Engineering
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Course Approval System
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Acadamic Calander Management System
                  </a>
                </li>
              </ul>
            </MDBCol>

            {/* <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol> */}
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright: Software Engineering Project - Team 6
      
      </div>
    </MDBFooter>
  );
}