import '../css/AchievementSection.css';
import ai from '../assets/icons/ai.svg';
import members from '../assets/icons/members.svg';
import challenges from '../assets/icons/challenges.svg';

const AchievementSection = () => {
    return (
        <div className='achievements__section'>
            <ul>
                <li className='achievement__wpr'>
                    <div className='achievement__icon__wpr'>
                        <img className='icon' src={ai} alt='ai-icon' />
                    </div>
                    <div className='achievement__details__wpr'>
                        <h3 className='total__number'>100K+</h3>
                        <p className='short__description'>AI model submissions</p>
                    </div>
                </li>
                <li className='achievement__wpr data__science'>
                    <div className='achievement__icon__wpr'>
                        <img className='icon' src={members} alt='members-icon' />
                    </div>
                    <div className='achievement__details__wpr'>
                        <h3 className='total__number'>50K+</h3>
                        <p className='short__description'>Data Scientists</p>
                    </div>
                </li>
                <li className='achievement__wpr'>
                    <div className='achievement__icon__wpr'>
                        <img className='icon' src={challenges} alt='challenges-icon' />
                    </div>
                    <div className='achievement__details__wpr'>
                        <h3 className='total__number'>100+</h3>
                        <p className='short__description'>AI Challenges hosted</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default AchievementSection;