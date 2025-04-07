import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './libs/components/header/header';

const App = () => {

  return (
    <>
      <Header />
      <h1>Shared header</h1>
      <Outlet />
    </>
  )
}

export default App;
