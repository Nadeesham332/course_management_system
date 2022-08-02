// import _ from 'lodash'
// import React, { Component } from 'react'
// import { Grid, Dropdown, Form } from 'semantic-ui-react'

// const getOptions = (number, prefix = 'Choice ') =>
//   _.times(number, (index) => ({
//     key: index,
//     text: `${prefix}${index}`,
//     value: index,
//   }))

// export default class Catalogue extends Component {
//   state = {
//     default: '',
//     false: '',
//   }

//   handleChange = (e, { name, value }) => this.setState({ [name]: value })

//   render() {
//     return (
//       <Grid columns='equal'>
//         <Grid.Column>
//           <Form>
//             <Form.Field>
//               <label>Default selectOnNavigation</label>
//               <Dropdown
//                 selection
//                 name='default'
//                 options={getOptions(3)}
//                 placeholder='I change value on keyboard navigation'
//                 onChange={this.handleChange}
//               />
//             </Form.Field>
//             <Form.Field>
//               <label>{'selectOnNavigation={false}'}</label>
//               <Dropdown
//                 selectOnNavigation={false}
//                 selection
//                 name='false'
//                 options={getOptions(3)}
//                 placeholder='I do not change value on keyboard navigation'
//                 onChange={this.handleChange}
//               />
//             </Form.Field>
//           </Form>
//         </Grid.Column>
//         <Grid.Column>
//           Dropdown values:
//           <pre>{JSON.stringify(this.state, null, 2)}</pre>
//         </Grid.Column>
//       </Grid>
//     )
//   }
// }

import React from 'react'

import { Dropdown } from 'semantic-ui-react'
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

const options = [
  { key: 1, text: 'One', value: 1 },
  { key: 2, text: 'Two', value: 2 },
  { key: 3, text: 'Three', value: 3 },
]

const Catalogue = () => (
  <Dropdown selection options={options} placeholder='Choose an option' />
)

export default Catalogue

// import Navbar from '../Navigation/Navbar.js';
// import Footer from '../Footer/Footer.js';
// // import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import { useState } from 'react';
// import { Button, Dropdown } from 'semantic-ui-react'



// const Catalogue = () => {

//     const [acadamicYr, setAcadamicYr] = useState('2022/2021');

//     // const acadamicYr= '2022/2021';
//     const options = [
//         { key: 'edit', icon: 'edit', text: 'Edit Post', value: 'edit' },
//         { key: 'delete', icon: 'delete', text: 'Remove Post', value: 'delete' },
//         { key: 'hide', icon: 'hide', text: 'Hide Post', value: 'hide' },
//       ]

//     return (
      
//         <> 
        
//         <Navbar/>


//             {/* <ul > */}
//         {/* <label>Acadamic year: </label>
//         <DropdownButton id="dropdown-basic-button" title={acadamicYr}>
//       <Dropdown.Item value>2022/2021</Dropdown.Item>
//       <Dropdown.Item >2021/2020</Dropdown.Item>
//       <Dropdown.Item >2020/2019</Dropdown.Item>
//     </DropdownButton></ul> */}
//       <Button.Group color='teal'>
//     <Button>Save</Button>
//     <Dropdown
//       className='button icon'
//       floating
//       options={options}
//       trigger={<></>}
//     />
//   </Button.Group>
        
//         <Footer/>
//         </>
       
        
//     );
// }

// export default Catalogue;
