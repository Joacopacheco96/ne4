import './App.css';

import {BrowserRouter,Route,Routes} from 'react-router-dom';

import Main from './Components/Main/Main.jsx'
import Login from './Components/Main/Login.jsx'
import Register from './Components/Main/Register.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>  
      <Route path='/figuritas' element={<Main/>}/>  
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
