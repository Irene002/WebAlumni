
// IMAGES
import image1 from '../assets/image1.jpeg?format=webp';
import angkatan from '../assets/angkatan.jpg?format=webp'
import idax from '../assets/evandrix.jpg?format=webp'

import {useState, useEffect} from "react";

// LOGO
import logo1 from '../assets/logo-ti.png?format=webp'
import logo2 from '../assets/Hima.gif'
import logo3 from '../assets/polnustar.png?format=webp'

// DATA
import cardDataMahasiswa from '../components/cards/cardData/CardDataMahasiswa';


import {FaInstagram, FaArrowRight, FaFacebook} from 'react-icons/fa6'

// COMPONTENTS
import AnimationTitle from '../components/Animations/AnimationTitle.jsx'
import AnimationInView from '../components/Animations/AnimationInView';
import ButtonLink from '../components/Buttons/ButtonLink';
import ButtonScrollToTop from '../components/Buttons/ButtonScrollToTop';

import GalleryCard from '../components/cards/GalleryCard.jsx';

import CardImage from '../components/cards/CardImage';

import CardProfilMahasiswa from '../components/cards/CardProfilMahasiswa';
import CardVisiMisi from '../components/cards/CardVisiMisi';

import VisiMisiData from '../components/cards/cardData/VisiMisiData';

const Home = () => {

    const images = [
        image1,
        angkatan,image1,
        angkatan,image1,
        angkatan,image1,
        angkatan,image1,
        angkatan,image1,
        angkatan,image1,
        angkatan,image1,
        angkatan,image1,
        angkatan,]




    AnimationTitle('TitleHome', 1.3)

    AnimationInView('CardSambutanImage', 1)
    AnimationInView('ContentSambutan', 1.5)

    AnimationInView('CardPengantarImage', 1)
    AnimationInView('ContentPengantar', 1.5)

    const [randomCards, setRandomCards] = useState([]);

    // Function to shuffle the array
    const shuffleArray = (array) => {
        let shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    useEffect(() => {
        // Shuffle and pick first 3 cards
        const shuffledCards = shuffleArray(cardDataMahasiswa).slice(0, 3);
        setRandomCards(shuffledCards);
    }, []);

  return (
    <section>
        <div className='flex w-full h-[700px] relative'>
            <div className='absolute z-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' id='TitleHome'>
            <h2>Website Alumni Edisi 2025</h2>
            <h1>ANGKATAN 2022</h1>
            <h2>Politeknik Negeri Nusa Utara</h2>
            <p>Angkatan 2022 nih bos... angkatan lain mana bisa?</p>
            </div>
            <img className='pointer-events-none w-full h-auto object-cover brightness-50' src={angkatan} />
        </div>

        <div className='flex flex-col gap-48 px-32 mt-32 SectionContents'>
            <div className='flex flex-row justify-between gap-8 SambutanContents'>
                <CardImage
                    ImageCard={idax}
                    CardName={'Oktavianus Lumasuge, M.Kom'}
                    TextPosition={`top-[80%] left-[45%] w-[15rem]`}
                />

                <div className='Sambutan leading-loose' id='ContentSambutan'>
                    <h2>KATA SAMBUTAN</h2>
                    <hr className='border-black mb-4'/>
                    <p className='leading-[2.5] text-justify select-text cursor-auto'>Sebagai Ketua Jurusan Teknologi
                        Informatika, saya merasa bangga dengan pencapaian para mahasiswa yang berhasil menyelesaikan
                        Proyek Kerja Akhir. Setiap proyek yang dihasilkan bukan hanya cerminan dari kemampuan teknis dan
                        intelektual mereka, tetapi juga membawa nilai - nilai lokal Sangihe, seperti kebersamaan, gotong
                        royong, dan rasa cinta terhadap tanah kelahiran. Dengan memadukan teknologi modern dan kekayaan
                        budaya, mereka telah menciptakan karya - karya yang memiliki dampak positif bagi masyarakat dan
                        potensi lokal, sejalan dengan tantangan perkembangan zaman yang semakin dinamis. Salam hangat
                        dan sukses selalu!</p>
                </div>
            </div>
            <div className='flex flex-row justify-between gap-12 mt-32 PengantarContents'>
                <div className='leading-[2.5] text-end' id='ContentPengantar'>
                    <h2>KATA PENGANTAR</h2>
                    <hr className='border-black mb-4'/>
                    <p className='leading-[2.5] text-justify select-text cursor-auto'>Sebagai Ketua Panitia Proyek Kerja
                        Akhir, saya merasa bangga dan bersyukur melihat hasil karya yang telah dicapai oleh para
                        mahasiswa. Melalui berbagai tahapan proses, mulai dari perencanaan hingga implementasi, setiap
                        proyek yang dihasilkan tidak hanya menunjukkan kemampuan akademik, tetapi juga kemampuan
                        analitis, problem solving, dan kreativitas yang diharapkan dapat berguna bagi dunia industri an
                        masyarakat. Website ini menjadi wadah untuk menghimpun berbagai hasil kerja keras tersebut dan
                        juga menjadi kenangan - kenangan yang berharga bagi para alumni.</p>
                </div>
                <CardImage
                    ImageCard={idax}
                    CardName={'Christian Koloay, M.Kom'}
                    TextPosition={`top-[80%] left-[45%] w-[15rem]`}
                />
            </div>

            {/* CARD VISI & MISI */}
            <div className=' flex flex-col items-center w-full'>
            <div className='flex justify-center w-full mb-24'>
                <h2>Visi & Misi</h2>
            </div>
            <div className='flex flex-col items-center gap-20 VisiMisiWrapper'>
                {VisiMisiData.slice(0, 2).map((value, index) => (
                    <CardVisiMisi
                        key={index}
                        TextTitle1={value.TextTitle1}
                        Description1={value.Description1}
                        TextTitle2={value.TextTitle2}
                        Description2={value.Description2}
                        button={value.button}
                    />
                ))}
            </div>
            </div>

            {/* LIST MAHASISWA */}
            <div>
                <h2 className='flex justify-center py-16 text-center'>MAHASISWA ALUMNI</h2>
                <div className='flex-wrap flex gap-8 justify-center'>
                    {/* Cards */}
                    {randomCards.map((card, index) => (
                            <CardProfilMahasiswa
                                key={index}
                                cardMahasiswa={card}
                                BtnLeft={<FaInstagram size={25}/>}
                                BtnMid={<FaFacebook size={25}/>}
                                BtnRight={<FaArrowRight size={25}/>}
                            />
                        )
                    )}

                </div>
                <div className='flex justify-center mt-[4rem]'>
                    <ButtonLink
                        path={'/mahasiswa'}
                        linkLabel={'Lihat Selengkapnya'}
                    />
                </div>
            </div>

            {/* GALERY */}
            <div className='flex flex-col items-center gap-12'>
                <h2 className='flex justify-center text-center'>GALLERY</h2>
            <div className='p-4'>
                <GalleryCard images={images}/>
            </div>
            </div>


            {/* LOGOS */}

            <div className=' mb-32 flex flex-col items-center'>
                <hr className='border-zinc-500 mb-8 LineTop'/>
                <div className='flex flex-row gap-24 justify-center ContentSpons'>
                    <div className='flex flex-col items-center gap-4'>
                        <img className='pointer-events-none w-32 h-32' src={logo1} alt="Teknologi Informatika"/>
                        <h3 className='text-center'>Teknologi Informatika</h3>
                    </div>
                    <div className='flex flex-col items-center gap-4 w-64'>
                        <img className='pointer-events-none w-fit h-32' src={logo2} alt="Teknologi Informatika"/>
                        <h3 className='text-center'>HIMPUNAN MAHASISWA PROGRAM STUDI SISTEM INFORMASI</h3>
                    </div>
                    <div className='flex flex-col items-center gap-4 w-36'>
                        <img className='pointer-events-none w-32 h-32' src={logo3} alt="Teknologi Informatika"/>
                        <h3 className='text-center'>Politeknik Negeri Nusa Utara</h3>
                    </div>
                </div>
                <hr className='border-zinc-500 mt-8 LineBottom'/>
            </div>
        </div>

        <div className='flex justify-center'>
            <ButtonScrollToTop/>
        </div>
    </section>
  )
}

export default Home