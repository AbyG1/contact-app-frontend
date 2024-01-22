import { Route, Router, Routes } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound'
import Home from './Components/Home'
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer'
import View from './Components/View';
import Add from './Components/Add';


function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>
            <Route path={'/'} element={<Home/>}></Route>
            <Route path={'/view/:id'} element={<View/>}></Route>
            <Route path={'/add'} element={<Add></Add>}></Route>
            <Route path={'*'} element={<PageNotFound/>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
