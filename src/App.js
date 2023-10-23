import { Route, Routes } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import AdminAuthorization from './pages/AdminAuthorization';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<MainPage/>}/>
        <Route path='/admin-authorization' element = {<AdminAuthorization/>}/>
      </Routes>
    </div>
  );
}

export default App;
