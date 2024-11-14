import {FaArrowDown} from 'react-icons/fa6'
import {useState} from "react";

const CardVisiMisi =
    ({TextTitle1,
       TextTitle2,
       Description1,
       Description2,
       button
    }) => {
        const [isVisible, setIsVisible] = useState(false);

      const renderDescription = (description) =>
          description.split('\n').map((line, index) => <p key={index}>{line}</p>);

        const toggleVisibility = () => {
            setIsVisible(!isVisible);
        };

        return (
    <div className='flex gap-8 flex-col w-[70%] VisiMisiCard'>
    <button onClick={toggleVisibility} className=' flex flex-row gap-4 items-center text-xl font-bold text-black hover:text-[#FA812F] transition-all duration-300 hover:scale-105'>
        {button}
      <FaArrowDown className={isVisible ? 'rotateArrow' : ''}/>
    </button>
        {isVisible && (
    <div className='TextContainerVisiMisi text-start text-[1rem] flex flex-col gap-4 fade-down'>
      <h3 className='text-lg'>
      {TextTitle1}
      </h3>
        <div className='leading-loose text-justify flex flex-col gap-2'> {renderDescription(Description1)} </div>
      <h3>
      {TextTitle2}
      </h3>
        <div className='leading-loose text-justify flex flex-col gap-2'>{renderDescription(Description2)}</div>
    </div>
        )}
    </div>
  )
}

export default CardVisiMisi