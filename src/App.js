

import logo from './image/bill.webp';
import { nanoid } from 'nanoid';
import './App.css';
import data from './bill.data.json';
import { useState } from 'react';

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    
    fullName: '',
    email: '',
    phone: '',
    paidAmount: ''
  });
  const [editFormData, setEditFormData] = useState({
    fullName: '',
    email: "",
    phone: "",
    paidAmount: "",
  });
  const [editContactId, setEditContactId] = useState(null);
  const handleAddFormChange = (event) =>{
    event.preventDefult();
    const fieldName = event.target.getattribute('name');
    const fieldValue = event.target.value;
    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefult();
    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      email: addFormData.email,
      phone: addFormData.phone,
      paidAmount: addFormData.paidAmount
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  }
  return (
    <div>
      <div  className="header">
      <img src={logo} alt="" />
      <p>Paid Total: 0</p>
      </div>
      
      <div className='app-container'>
      <div className='search-bar'>
       <h6>Billings </h6>
       <input type="search" placeholder='Search' />
       <button className='btn btn-info'>Add New Bill</button>
      </div>
      <table>
        <thead>
          <tr>
            
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Paid Amount</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
            
            <td>{contact.fullName}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>{contact.paidAmount}</td>
          </tr>
          ))}
          
        </tbody>
      </table>
      <h4>Add Contact</h4>
      <form onSubmit={handleAddFormSubmit}>
        
        <input type="text" name='fullName' required="required" placeholder='Enter a name' onChange={handleAddFormChange}/>
        <input type="text" name='email' required="required" placeholder='Enter a email' onChange={handleAddFormChange} />
        <input type="text" name='phone' required="required" placeholder='Enter a phone' onChange={handleAddFormChange} />
        <input type="text" name='paidAmount' required="required" placeholder='Enter a paidAmount' onChange={handleAddFormChange} />
        <button type='submit'>Add</button>
      </form>

      </div>
    </div>
  );
}

export default App;
