

import logo from './image/bill.webp';
import { nanoid } from 'nanoid';
import './App.css';
import data from './bill.data.json';
import { Fragment, useState } from 'react';
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

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
  const handleAddFormChange = (event) => {
    event.preventDefult();
    const fieldName = event.target.getattribute('name');
    const fieldValue = event.target.value;
    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
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
  };
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
   
    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      email: editFormData.email,
       phone: editFormData.phone,
       paidAmount: editFormData.paidAmount
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      email: contact.email,
      phone: contact.phone,
      paidAmount: contact.paidAmount,
     
      
    };

    setEditFormData(formValues);
  };
  const handleCancelClick = () => {
    setEditContactId(null);
  };
  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
  return (
    <div>
      <div  className="header">
      <img src={logo} alt="" />
      <p>Paid Total: 0</p>
      </div>
      <div className='search-bar'>
       <h6>Billings </h6>
       <input type="search" placeholder='Search' />
       <button className='btn btn-info'>Add New Bill</button>
      </div>
      <div className='app-container'>
      
      <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
          <tr>
            
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Paid Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {contacts.map((contact) => (
          
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
             ))}
          
        </tbody>
      </table>
      </form>
      

      <h4>Add a Contact</h4>
      <form onSubmit={handleAddFormSubmit}>
        
        <input 
        type="text" 
        name='fullName' 
        required="required" 
        placeholder='Enter a name' 
        onChange={handleAddFormChange}
        />

        <input 
        type="email" 
        name='email' 
        required="required" 
        placeholder='Enter a email' 
        onChange={handleAddFormChange} 
        />

        <input 
        type="text" 
        name='phone' 
        required="required" 
        placeholder='Enter a phone' 
        onChange={handleAddFormChange} 
        />

        <input 
        type="text" 
        name='paidAmount' 
        required="required" 
        placeholder='Enter a paidAmount' 
        onChange={handleAddFormChange} 
        />

        <button type='submit'>Add</button>
      </form>

      </div>
    </div>
  );
}

export default App;
