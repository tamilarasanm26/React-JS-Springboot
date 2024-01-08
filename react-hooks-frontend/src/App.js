import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import About from './components/About';
import Contact from './components/Contact';
import Detail from './components/Detail'
import Blog from './components/Blog';
function App() {
  return (
    <div>
      <body>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Routes>

            <Route path="" element={<ListEmployeeComponent/>}></Route>
            <Route path = "/add-employee" element = {<AddEmployeeComponent/>} ></Route>
            <Route path = "/add-employee/:id" element = {<AddEmployeeComponent/>} ></Route>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='detail' element={<Detail/>}/>
            <Route path='blog' element={<Blog/>}/>
          </Routes>
        
        </div>
       
        </Router>
        </body>
    </div>
  );
}

export default App;


