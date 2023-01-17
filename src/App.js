import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import SingleMovie from './SingleMovie';
import Error from './Error';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="SingleMovie/:id" element={<SingleMovie/>}/>
      <Route path="Error" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
