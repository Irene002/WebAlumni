const CardImage = ({ImageCard, CardName, TextPosition}) => {
    return (
        <div className='CardImage bg-black overflow-clip relative flex w-[350px] h-[450px] rounded-xl shadow-md shadow-orange-950'>
                <img className='transition-all duration-700 w-full h-auto object-cover' src={ImageCard} alt=""/>
            <div className={`absolute -translate-x-1/2 -translatey-y-1/2 z-20 ${TextPosition}`}>
                <h3 className='text-white text-2xl'>{CardName}</h3>
            </div>
        </div>
    )
}
export default CardImage
