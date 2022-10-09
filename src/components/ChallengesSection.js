import '../css/ChallengesSection.css';
import searchicon from '../assets/icons/search.svg';
import arrow from '../assets/icons/arrow.svg';
import { useEffect, useState } from 'react';
import ChallengeCard from './ChallengeCard';
import challenges from '../data/challenges.json'

const status = [
    'All', 'Active', 'Upcoming', 'Past'
]

const levels = [
    'Easy', 'Medium', 'Hard'
]

const ChallengesSection = () => {
    const [statusFilters, setStatusFilters] = useState([]);
    const [levelsFilters, setLevelsFilters] = useState([]);
    const [statusBasedData, setStatusBasedData] = useState([]);
    const [levelsBasedData, setLevelsBasedData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [showFilters, setShowFilters] = useState(false);

    const handleStatusFilters = (e) => {
        if (e.target.checked) {
            setStatusFilters([...statusFilters, e.target.value])
        } else {
            const items = statusFilters.filter((item) => item !== e.target.value);
            setStatusFilters(items);
        };
    };

    useEffect(() => {
        const date = new Date().getTime();

        challenges.map((item) => {
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

            return item;

        })

    }, [])

    useEffect(() => {
        if (statusFilters.includes('All') || statusFilters.length === 0) {
            setStatusBasedData(challenges);
        }
        else {
            let data = [];
            for (let i = 0; i < statusFilters.length; i++) {
                challenges.map((item) => item.status === statusFilters[i] && data.push(item));
            }
            setStatusBasedData(data);
        }
    }, [statusFilters])

    const handleLevelsFilters = (e) => {
        if (e.target.checked) {
            setLevelsFilters([...levelsFilters, e.target.value]);
        }
        else {
            const items = levelsFilters.filter((item) => item !== e.target.value);
            setLevelsFilters(items);
        };
    };

    useEffect(() => {
        if (levelsFilters.length === 0) {
            setLevelsBasedData(statusBasedData);
            setFilteredData(statusBasedData);
        }
        else {
            let data = [];
            for (let i = 0; i < levelsFilters.length; i++) {
                statusBasedData.map((item) => item.level === levelsFilters[i] && data.push(item));
            }
            setLevelsBasedData(data);
            setFilteredData(levelsBasedData);
        }
    }, [levelsFilters, statusFilters, statusBasedData, levelsBasedData]);

    const handleSearch = (e) => {

        let searchChallenge = e.target.value;

        if (searchChallenge.length !== 0) {
            let data = [];
            levelsBasedData.forEach((item) => {
                if(item.challengeName.toLowerCase().match(searchChallenge)){
                    data.push(item);
                }
            });
            setFilteredData(data)
        }
        else{
            setFilteredData(levelsBasedData);
        };
    };


    return (
        <div className='challenges__section'>
            <div className='explore__challenges__section'>
                <h4 className='section__heading'>Explore Challenges</h4>
                <div className='input__filter__wpr'>
                    <span className='input__icon__wpr'>
                        <input type='search' placeholder='Search' onChange={(e) => handleSearch(e)} />
                        <div className='search__icon__wpr'>
                            <img className='search__icon' src={searchicon} alt='search-icon' />
                        </div>
                    </span>

                    <div className='drop__down__wpr'>
                        <h4 onClick={() => setShowFilters(!showFilters)} className='filter__title'>Filter
                            <div className='arrow__icon__wpr'>
                                <img className={`arrow__icon ${showFilters && 'rotate__arrow'}`} src={arrow} alt='arrow' />
                            </div>
                        </h4>
                        <div className={`filters__wpr ${showFilters && 'show__filters'}`}>
                            <div className='status__filter__wpr filter__wpr'>
                                <h4 className='status__title filter__section__title'>Status</h4>
                                {status.map((item, id) =>
                                    <span className='input__label__wpr' key={id}>
                                        <input
                                            onChange={(e) => handleStatusFilters(e)}
                                            className='filter__checkbox'
                                            type='checkbox' id={item}
                                            value={item} />
                                        <label
                                            className='filter__label'
                                            htmlFor={item}>
                                            {item}
                                        </label>
                                    </span>)}
                            </div>
                            <div className='levels__filter__wpr filter__wpr'>
                                <h4 className='status__title filter__section__title'>Levels</h4>
                                {levels.map((item, id) =>
                                    <span className='input__label__wpr' key={id}>
                                        <input
                                            onChange={(e) => handleLevelsFilters(e)}
                                            type='checkbox'
                                            className='filter__checkbox'
                                            id={item}
                                            value={item} />
                                        <label
                                            className='filter__label'
                                            htmlFor={item}>
                                            {item}
                                        </label>
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='filters__names'>
                    {statusFilters.map((item, id) => <span key={id} className='filter'>{item}</span>)}
                    {levelsFilters.map((item, id) => <span key={id} className='filter'>{item}</span>)}
                </div>
            </div>

            <div className='challenge__card__wpr'>
                {filteredData.map((item, id) => <ChallengeCard key={id} id={id} data={item} />)}
            </div>
        </div>
    );
};

export default ChallengesSection;