import { Route, Routes } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import AdminAuthorization from './pages/AdminAuthorization';
import OrderPage from "./pages/OrderPage";
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<MainPage/>}/>
        <Route path='/admin-authorization' element = {<AdminAuthorization/>}/>
        <Route path='/order-page' element = {<OrderPage/>}/>
        <Route path='/admin-page' element = {<AdminPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
