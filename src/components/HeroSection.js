import { Link } from 'react-router-dom';
import rocket from '../assets/icons/rocket.svg'
import '../css/HeroSection.css';

const HeroSection = () => {
    return (
        <div className='hero__section'>
            <div className='hero__content__icon__wpr'>
                <div className='content__wpr'>
                    <h4 className='title'><span className='line' />Accelerate Innovation<br />with Global AI Challenges</h4>
                    <p className='description'>AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.</p>
                    <Link className='cc__btn' to='/create/challenge'>Create Challenge</Link>
                </div>
                <div className='icon__wpr'>
                    <img className='icon' src={rocket} alt='rocket' />
                </div>
            </div>
        </div>
    )
}


export default HeroSection;