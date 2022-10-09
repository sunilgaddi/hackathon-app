import { Link } from 'react-router-dom';
import '../css/ChallengeCard.css'
import c1 from '../assets/cardimage/c1.png'

const ChallengeCard = ({ data, id}) => {

    const counter = (data) => {
        let date;
        if (data.status === 'Active') {
            date = data.endDate;
        }
        else {
            date = data.startDate;
        }
        const currentDate = new Date().getTime();
        const destinationData = new Date(date).getTime();

        const totalMilliSecs = destinationData - currentDate;

        const days = Math.floor(totalMilliSecs / (24 * 60 * 60 * 1000));
        const hours = Math.floor((totalMilliSecs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const mins = Math.floor((totalMilliSecs % (60 * 60 * 1000) / (60 * 1000)));

        return (
            <>
                <span className='counter__wpr'>
                    <span className='counter days'>{days}</span>
                    <span className='counter__label'>Days</span>
                </span>
                <span className='colon'>:</span>
                <span className='counter__wpr'>
                    <span className='counter hours'>{hours}</span>
                    <span className='counter__label'>Hours</span>
                </span>
                <span className='colon'>:</span>
                <span className='counter__wpr'>
                    <span className='counter mins'>{mins}</span>
                    <span className='counter__label'>Mins</span>
                </span>
            </>
        )
    }

    const date = (endDate) => {
        let formatedDate = new Date(endDate).toString();
        formatedDate = formatedDate.slice(0,15);
        return `${formatedDate}`;
    }


    return (
        <div className='card__section'>
            <div className='card__banner'>
                <img className='card__image' src={c1} alt='card_img' />
            </div>
            <div className='card__content'>
                <span className={`challenge__status ${data?.status.toLowerCase()}`}>{data?.status}</span>
                <h3 className='challenge__name'>{data?.challengeName}</h3>
                {(data.status === 'Active' && <span className='start__or__end__status'>Ends In</span>)
                    ||
                    (data.status === 'Upcoming' && <span className='start__or__end__status'>Starts In</span>)
                    ||
                    (data.status === 'Past' && <span className='start__or__end__status'>Ended On</span>)}
                <div className='timer__or__date'>
                    {
                        (data.status === 'Active' || data.status === 'Upcoming') ?
                                counter(data)
                            :
                            <span className='date'>{ date(data?.endDate) }</span>
                    }
                </div>
                <Link className='participate__btn' to={`/challenge-details/${id}`}>
                    Participate Now
                </Link>
            </div>
        </div>
    );
};

export default ChallengeCard;