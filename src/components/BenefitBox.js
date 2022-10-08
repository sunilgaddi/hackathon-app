import '../css/BenefitBox.css';

const BenefitBox = ({data}) => {
    return(
        <div className='benefit__box__wpr'>
            <div className='box__icon__wpr'>
                <img className='icon' src={data.icon} alt='carbon-notebook' />
            </div>
            <h3 className='benefit__title'>{data.title}</h3>
            <p className='benefit__description'>{data.description}</p>
        </div>
    );
};

export default BenefitBox;