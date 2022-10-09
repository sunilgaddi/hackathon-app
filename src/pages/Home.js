import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import '../css/Home.css';

import DashBoard from '../components/DashBoard';
import CreateChallengeForm from '../components/CreateChallengeForm';

const Home = () => {

    const location = useLocation();
    const currentPath = location.pathname;

    const navigate = useNavigate();

    useEffect(() => {
        if(currentPath === '/'){
            navigate('/dashboard');
        }
    },[currentPath, navigate]);
    
    return(
        <section id='home__section'>
            <Routes>
                <Route path='/dashboard' element={<DashBoard/>} />
                <Route path='/create-challenge' element={<CreateChallengeForm/>} />
            </Routes>
        </section>
    );
};

export default Home;