import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Search from './components/Search';
import Cart from './components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >

    <BrowserRouter>

    <Routes>

      <Route path='/' element={ <Form /> } />
      <Route path='/search' element={ <Search /> } />
      <Route path='/cart' element={ <Cart /> } />

    </Routes>
    
    </BrowserRouter>

    </div>
  );
}

export default App;
