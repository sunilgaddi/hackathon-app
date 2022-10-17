import '../css/CreateChallengeForm.css';
import calender from '../assets/icons/uil_calender.svg';
import cloud from '../assets/icons/bxs_cloud-upload.svg';
import {useParams} from 'react-router-dom'
import challenges from '../data/challenges.json'
import {useState, useEffect} from 'react';

import banner1 from '../assets/cardimage/b1.png'
import banner2 from '../assets/cardimage/b2.png'
import banner3 from '../assets/cardimage/b3.png'
import banner4 from '../assets/cardimage/b4.png'
import banner5 from '../assets/cardimage/b5.png'
import banner6 from '../assets/cardimage/b6.png'

const images = [banner1, banner2, banner3, banner4, banner5, banner6];


const CreateChallengeForm = () => {
    const {id} = useParams();
    const [challenge, setChallenge] = useState({
        challengeName:"",
        status:"",
        level:"",
        startDate:"",
        endDate:"",
        description:"",
        image:''
    });

    useEffect(() => {
        if(id){
            let item = challenges[id];
            item.startDate = new Date(item.startDate).toISOString().slice(0,19);
            item.endDate = new Date(item.endDate).toISOString().slice(0,19);
            setChallenge(item);
        }
    },[id]);

    const [message, setMessage] = useState('')
    const handleChallengeFields = (e) =>{
        setChallenge({
            ...challenge, [e.target.name]:e.target.value
        });
    };


    const submitChallenge = (e) => {
        e.preventDefault();
        const {challengeName, level, startDate, endDate, description} = challenge
        if(challengeName && level && startDate && endDate && description){
            setMessage("Successfully Created Challenge")
            challenges.push(challenge);
        }
        else{
            setMessage("Please Fill All Fields");
        }
    }

    console.log(challenge)
    return (
        <div className='createchallenge__section'>
            <div className='createchallenge__title__wpr'>
                <h3 className='createchallenge__title'>
                    Challenge Details
                </h3>
            </div>
            {message && <h3 className='message'>{message}</h3>}
            <form>
                <div className='inputs__label__wpr'>
                    <label
                        htmlFor='challenge__name'
                        className='challenge__name__label challenge__label'>
                        Challenge Name
                    </label>
                    <input
                        type='text'
                        id='challenge__name'
                        name='challengeName'
                        value={challenge?.challengeName}
                        onChange={(e) => handleChallengeFields(e)}
                        className='challenge_name__field challenge__field' />
                </div>

                <div className='inputs__label__wpr'>
                    <label
                        htmlFor='challenge__start__date'
                        className='challenge__start__date__label challenge__label'>
                        Start Date
                    </label>
                    <span className='calender__field__icon__wpr'>
                        <input
                            type='datetime-local'
                            id='challenge__start__date'
                            name='startDate'
                            value={challenge?.startDate}
                        onChange={(e) => handleChallengeFields(e)}
                            className='challenge__start__date__field challenge__field' />
                        <div className='calender__icon__wpr'>
                            <img className='calender__icon' src={calender} alt='calender-icon' />
                        </div>
                    </span>
                </div>

                <div className='inputs__label__wpr'>
                    <label
                        htmlFor='challenge__end__date'
                        className='challenge__start__date__label challenge__label'>
                        End Date
                    </label>
                    <span className='calender__field__icon__wpr'>
                        <input
                            type='datetime-local'
                            id='challenge__end__date'
                            name='endDate'
                            value={challenge?.endDate}
                        onChange={(e) => handleChallengeFields(e)}
                            className='challenge__end__date__field challenge__field'
                        />
                        <div className='calender__icon__wpr'>
                            <img className='calender__icon' src={calender} alt='calender-icon' />
                        </div>
                    </span>
                </div>

                <div className='inputs__label__wpr'>
                    <label
                        htmlFor='challenge__desc'
                        className='challenge__desc__label challenge__label'>
                        Description
                    </label>
                    <textarea
                        rows={8}
                        cols={50}
                        id='challenge__desc'
                        name='description'
                        value={challenge?.description}
                        onChange={(e) => handleChallengeFields(e)}
                        className='challenge__desc__field challenge__field' />
                </div>

                <div className='inputs__label__wpr'>
                    <label
                        htmlFor='image__upload'
                        className='image__upload__label challenge__label'>
                        Image
                    </label>
                    <span>
                        <input
                            type='file'
                            id='image__upload'
                            className='image__upload__field challenge__field'
                        />
                        <label className='upload__label' htmlFor='image__upload'>Upload <img src={cloud} alt='cloud' /></label>
                    </span>

                    {(challenge?.image || id) && 
                    <div className='prev__challenge__banner__wpr'>
                        <img className='prev__challenge__banner' src={images[challenge?.image-1]} alt='challenge-banner'/>
                    </div>}
                </div>

                <div className='inputs__label__wpr'>
                    <label
                        htmlFor='challenge__level'
                        className='challenge__level__label challenge__label'>
                        Level Type
                    </label>
                    <select
                        id='challenge__level'
                        name='level'
                        defaultValue={challenge?.level}
                        onChange={(e) => handleChallengeFields(e)}
                        className='challenge__level__field challenge__field' >
                        <option className='level__options' value={challenge.level || ""}>{challenge.level || ""}</option>
                        <option className='level__options' value='Easy'>Easy</option>
                        <option className='level__options' value='Medium'>Medium</option>
                        <option className='level__options' value='Hard'>Hard</option>
                    </select>
                </div>

                <button onClick={(e) => submitChallenge(e)} className='create__challenge__btn'>{id ? 'Update Challenge' : 'Create Challenge'}</button>
            </form>

        </div>
    );
};

export default CreateChallengeForm;