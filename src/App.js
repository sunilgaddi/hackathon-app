import './App.css';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

//Pages and Components
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate('/dashboard');
  // },[navigate]);

  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
