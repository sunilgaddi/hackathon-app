import '../css/ChallengeBenefitsSection.css';
import BenefitBox from './BenefitBox';
import benefit1_icn from '../assets/icons/benefit1.svg';
import benefit2_icn from '../assets/icons/benefit2.svg';
import benefit3_icn from '../assets/icons/benefit3.svg';
import benefit4_icn from '../assets/icons/benefit4.svg';

const data = [
    {
        icon:benefit1_icn,
        title:'Prove your skills',
        description:'Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.'
    },
    {
        icon:benefit2_icn,
        title:'Learn from community',
        description:'One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.'
    },
    {
        icon:benefit3_icn,
        title:'Challenge yourself',
        description:'There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.'
    },
    {   icon:benefit4_icn,
        title:'Earn recognition',
        description:'You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.'
    }
]

const ChallengeBenefitsSection = () => {
    return (
        <div className='challenge__benefits__section'>
            <h4 className='cb__question'>Why Participate in <span style={{ color: '#44924C' }}>AI Challenges?</span></h4>
            <div className='benefits__boxes__wpr'>
                {data.map((item, id) => 
                    <BenefitBox key={id} data={item} />
                )}
            </div>
        </div>
    );
};

export default ChallengeBenefitsSection;