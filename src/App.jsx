import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import Login from './routes/login/Login';
import List from './routes/list/List';
import Single from './routes/single/Single';
import New from './routes/new/New';
import { productInputs, userInputs } from './components/formSource';
import './style/dark.scss'
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';

function App() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <>
      <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login/>} />
            <Route path='users'>
              <Route index element={<List/>} />
              <Route path=':userId' element={<Single/>} />
              <Route path='new' element={<New inputs={userInputs} title='Add new user'/>} />
            </Route>
            <Route path='products'>
              <Route index element={<List/>} />
              <Route path=':productId' element={<Single/>} />
              <Route path='new' element={<New inputs={productInputs} title='Add new product'/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>  
      </div>      
    </>
  );
}

export default App;
