

import logo from './image/bill.webp';
import './App.css';

function App() {
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
            <th>Billing ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Paid Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Khadiza Akter</td>
            <td>khadiza@gmail.com</td>
            <td>333-444-3389</td>
            <td>$ 344889</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;
