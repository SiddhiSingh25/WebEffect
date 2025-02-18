import Home from './Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './Home/Navbar';
import ContributorRequest from './Home/ContributorRequest';
import Register from './Auth/Register';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavbarComponent/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/become-contributor' element={<ContributorRequest/>}/>
      <Route path='/user-register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
