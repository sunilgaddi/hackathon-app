import HeroSection from './HeroSection'
import AchievementSection from './AchievementSection';
import ChallengeBenefitsSection from './ChallengeBenefitsSection';
import ChallengesSection from './ChallengesSection';

const DashBoard = () => {
    return(
        <div style={{width:"100%"}} className='dashboard'>
          <HeroSection/>
          <AchievementSection/>
          <ChallengeBenefitsSection/>
          <ChallengesSection/>
        </div>
    );
};

export default DashBoard;