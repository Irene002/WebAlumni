import {useEffect, useRef} from "react";

const GalleryCard = ({images}) => {
    const scrollRef = useRef(null);
    useEffect(() => {
        const scroll = scrollRef.current;

        const autoScroll = () => {
            if (scroll) {
                scroll.scrollLeft += 1;
                if (scroll.scrollLeft >= scroll.scrollWidth - scroll.clientWidth) {
                    scroll.scrollLeft = 0;
                }
            }
        };
        const interval = setInterval(autoScroll, 20);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <div
        ref={scrollRef}
        className="flex overflow-x-scroll scrollbar-hide whitespace-nowrap"
        > {images.map((image,index) => (
            <div key={index} className='inline-block min-w-[200px] mx-2 flex-shrink-0'>
                <img src={image} alt={`Gallery Item ${index}`} className='h-[20rem] w-[32rem] object-cover rounded-lg' />
            </div>
        ))}
        </div>
        </>
    )
}
export default GalleryCard
