import '../css/ChallengeDetails.css'
import {useParams, Link} from 'react-router-dom'
import levelIcon from '../assets/icons/carbon_skill-level-basic.svg'
import clock from  '../assets/icons/clock.svg'
import challenges from '../data/challenges.json'
import { useEffect, useState } from 'react'


const ChallengeDetails = () => {
    const {id} = useParams();
    const [challenge, setChallenge] = useState({});

    useEffect(() =>{
        if(id){
            
            let item = challenges[id];
            const date = new Date().getTime();
            let start = new Date(item.startDate).getTime();
            let end = new Date(item.endDate).getTime();

            start = start - date;
            end = end - date;

            if (start < 0 && end < 0) {
                item.status = 'Past';
            }
            else if (start <= 0 && end > 0) {
                item.status = 'Active'
            }
            else {
                item.status = 'Upcoming'
            }
            setChallenge(item)
        }
    },[id])


    return (
        <div className='challenge__details__section'>
            <div className='challenge__details__ctr'>
                <div className='challenge__details__wpr'>
                <p className='status'> <img className='clock__icon' src={clock} alt='clock__icon'/>
                {challenge?.status === 'Active' ? `Ends on ${challenge?.endDate}` : challenge?.status === 'Upcoming' ? `Starts on ${challenge?.startDate}` : `Ended on ${challenge?.endDate}` } (India Standard Time)</p>
                <h1 className='challenge__title'>{challenge?.challengeName}</h1>
                <p className='challenge__short__desc'>{challenge?.shortDesc}</p>
                <div className='level__icon__wpr'>
                    <img className='level__icon' src={levelIcon} alt='level__icon'/>
                    <span className='level'>{challenge?.level}</span>
                </div>
                </div>
            </div>
            <div className='overview__navbar'>
                <div className='overview__heading'>Overview</div>
                <div className='edit__del__wpr'>
                    <Link className='edit__btn' to={`/edit-challenge/${id}`}>Edit</Link>
                    <Link className='del__btn' to='/dashboard'>Delete</Link>
                </div>
            </div>
            <p className='full__description'>{challenge?.description}</p>
        </div>
    );
};

export default ChallengeDetails;