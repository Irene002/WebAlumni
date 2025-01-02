import imageBanner from '../assets/angkatan.jpg?format=webp'
import visionSVG from '../assets/visionsvg.png?format=webp'
import missionSVG from '../assets/missionsvg.png?format=webp'
import hima from '../assets/Hima.gif'
import polnustar from '../assets/polnustar.png?format=webp'
import logoTI from '../assets/logo-ti.png?format=webp'
import { FaChevronUp } from 'react-icons/fa6'

import DataMahasiswa2022 from '../DataMap/MahasiswaAlumni'
import { DataMahasiswa2021 } from '../DataMap/MahasiswaAlumni'

import { DataAngkatan } from '../DataMap/MahasiswaAlumni'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Home = () => {

    const DataSeluruhMahasiswa = [...DataMahasiswa2022, ...DataMahasiswa2021]

    const shuffleCardData = [...DataSeluruhMahasiswa].sort(() => Math.random() - 0.5)



    const NavigateBtn = {
        Button1: 'Daftar Mahasiswa Alumni',
        Button1Navigate: (() => Navigate('/mahasiswa')),

        Button2: 'Tentang Kami',
        Button2Navigate: (() => Navigate('/tentang')),
    }

    const [isTitle, setIsTitle] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsTitle(true)
        }, 1500);
    }, [])

    const cardData = [
        {
            title: 'Geoinformasi',
            description: 'Sistem Informasi Geografis adalah alat berbasis komputer yang menganalisis dan menampilkan data yang dirujuk secara geografis.'
        },
        {
            title: 'Desain UI/UX',
            description: 'User Interface (UI) dan User Experience (UX) desain berfokus pada membuat produk digital yang intuitif dan menarik secara visual.'
        },
        {
            title: 'Web Development',
            description: 'Pengembangan Web adalah proses membangun dan memelihara situs web dan aplikasi web yang dapat diakses melalui internet.'
        },
        {
            title: 'Data Management',
            description: 'Data Management adalah proses penyimpanan, pengambilan, dan analisis data untuk mendukung pengambilan keputusan yang tepat.'
        },
    ]

    const VisiMisi = {
        VisiDescription: 'Visi kami adalah menjadi wadah bagi para alumni untuk terus berkembang dan berkontribusi pada masyarakat. Kami berkomitmen untuk menciptakan komunitas yang kuat dan solid, sehingga para alumni dapat saling mendukung dan berbagi pengalaman. Kami juga berharap dapat menjadi sumber inspirasi bagi generasi muda dan menjadi contoh bagi masyarakat dalam hal kesadaran sosial dan tanggung jawab. Dengan demikian, kami dapat membantu menciptakan masyarakat yang lebih baik dan lebih sejahtera.',
        MisiDescription: 'Misi kami adalah untuk menyediakan platform bagi para alumni untuk berbagi pengetahuan, pengalaman, dan keterampilan. Kami juga berkomitmen untuk meningkatkan kesadaran dan partisipasi masyarakat dalam berbagai kegiatan sosial dan komunitas. Kami berharap dapat membantu meningkatkan kualitas hidup masyarakat dan menciptakan kesadaran akan pentingnya pendidikan dan pengembangan diri. Dengan demikian, kami dapat membantu menciptakan masyarakat yang lebih cerdas, lebih kreatif, dan lebih inovatif.'
    }

    const handleClickTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const generateLink = (angkatan, nama) => {
        return `/mahasiswa/${angkatan}/${nama.replace(/\s+/g, '-').toLowerCase()}`
    }

    const Navigate = useNavigate();

    return (

        <>
            <section onContextMenu={(e) => e.preventDefault()} className='relative'>
                <div className='relative'>
                    {isTitle && (
                        <div className='absolute z-10 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-center w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]'>
                            <div className='FadeIn'>
                            <div className={`transition-all duration-500`}>
                                <h1 className='text-white text-3xl mb-4 sm:text-3xl md:text-4xl lg:text-5xl'>Website Alumni 2024</h1>
                                <p className='text-white text-md sm:text-md md:text-lg xl:text-xl'>Website Alumni 2024 adalah platform bagi alumni untuk terhubung, berbagi pengalaman, dan berkontribusi pada komunitas.</p>
                            </div>
                            <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row gap-8 mt-8 justify-center items-center'>
                                <button onClick={NavigateBtn.Button1Navigate} className=' border-2 border-white text-white rounded-md p-4 transition-all duration-300 hover:bg-orange-400 hover:border-orange-400'>
                                    {NavigateBtn.Button1}
                                </button>
                                <button onClick={NavigateBtn.Button2Navigate} className=' border-2 border-white text-white rounded-md p-4 transition-all duration-300 hover:bg-orange-400 hover:border-orange-400'>
                                    {NavigateBtn.Button2}
                                </button>
                            </div>
                            </div>
                        </div>
                    )}
                    <img className='object-cover h-[700px] w-full brightness-[.4]' src={imageBanner} alt="" />
                </div>
                <div className=' py-32 px-4 bg-orange-100 sm:px-4 md:px-24 lg:px-24 xl:px-24 2xl:px-32'>
                    <div className='justify-between mb-24 sm:flex sm:flex-col sm:items-center md:flex-col md:items-center xl:flex xl:flex-row xl:mb-4'>
                        <div className='sm:w-full md:w-full lg:w-full xl:w-[50%] 2xl:w-[50%]'>
                            <h2 className='mb-2'>VISION</h2>
                            <p className='leading-10'>{VisiMisi.VisiDescription}</p>
                        </div>
                        <div>
                            <img className='h-auto w-[600px] flex-shrink-0' src={visionSVG} alt="vision" />
                        </div>
                    </div>

                    <div className='justify-between flex-col-reverse items-center flex sm:flex sm:flex-col-reverse md:flex-col-reverse md:flex xl:flex xl:flex-row'>
                        <div>
                            <img className='h-auto w-[550px] flex-shrink-0' src={missionSVG} alt="" />
                        </div>
                        <div className='w-full sm:w-full md:w-full xl:w-[55%]'>
                            <h2 className='mb-2'>MISSION</h2>
                            <p className='leading-10'>{VisiMisi.MisiDescription}</p>
                        </div>

                    </div>
                </div>

                <div className='bg-orange-600 p-12 flex justify-center'>
                    <div className='text-white'>
                        <div className='mb-12 text-center'>
                            <h2>METRIKS KAMI</h2>
                        </div>
                        <div className='justify-between flex-col flex gap-12 sm:flex-row md:flex-row lg:flex-row '>
                            <div className='text-center'>
                                <h3 className='text-3xl mb-2'>{DataSeluruhMahasiswa.length}</h3>
                                <p>Lulusan</p>
                            </div>
                            <div className='text-center'>
                                <h3 className='text-3xl mb-2'>{DataAngkatan.length}</h3>
                                <p>Angkatan</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-orange-100 p-32 px-4 pb-0 sm:px-8 md:px-12 lg:px-24 xL:px-32'>
                    <div className='flex justify-center text-center mb-24'>
                        <h2>PROGRAM ALUMNI</h2>
                    </div>
                    <div className='grid grid-cols-1 gap-8 w-full sm:grid-cols-1 md:grid-cols-2'>
                        {cardData.map((value, index) => (
                            <div key={index} className=' rounded-md bg-white p-8 border border-orange-400 transition-all duration-500 hover:scale-[1.03]'>
                                <h3 className='mb-2'>{value.title}</h3>
                                <p className='leading-loose'>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='p-32 px-4 pb-0 bg-orange-100 sm:px-8 md:px-12 lg:px-24 xl:px-24 2xl:px-32'>
                    <div className='flex justify-center text-center mb-24'>
                        <h2>MAHASISWA ALUMNI</h2>
                    </div>
                    <div className='flex justify-center'>
                    <div className='grid grid-cols-1 gap-12 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
                        {shuffleCardData.slice(0, 4).map((mhs, index) => (
                            <button onClick={() => Navigate(generateLink(mhs.Angkatan, mhs.Nama))} key={index} className='flex h-[450px] w-full max-w-[390px] min-w-[290px] bg-black rounded-md overflow-clip relative CardMahasiswa shadow-lg shadow-orange-200'>
                                <div className='bg-white border border-orange-500 text-black px-12 py-4 pb-12 shadow-lg absolute z-10 rounded-xl -bottom-40 -left-5 text-start transition-all duration-500 CardMahasiswaLabel'>
                                    <p className='font-bold mb-2'>{mhs.Nama}</p>
                                    <p>{mhs.NIM}</p>
                                </div>
                                <img className='transition-all duration-500 object-cover w-full h-full scale-110' src={mhs.Photo} />
                            </button>
                        ))}
                    </div>
                    </div>
                </div>

                <div className='bg-orange-100 p-32 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32'>
                    <hr className='border-orange-400 mb-12' />
                    <div className='grid grid-cols-1 gap-24 w-full items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-0'>
                        <div className='rounded-md text-center flex flex-col gap-4 items-center'>
                            <img className='w-44 h-auto' src={polnustar} alt="" />
                            <p className='w-60'>Politeknik Negeri Nusa Utara</p>
                        </div>
                        <div className='rounded-md text-center flex flex-col gap-8 items-center'>
                            <img className='w-72 h-auto' src={hima} alt="" />
                            <p className='w-60'>Himpunan Mahasiswa Program Studi Sistem Informasi</p>
                        </div>
                        <div className='rounded-md text-center flex flex-col gap-8 items-center'>
                            <img className='w-44 h-auto' src={logoTI} alt="" />
                            <p className='w-60'>Jurusan Teknologi Informatika</p>
                        </div>
                    </div>
                    <hr className='border-orange-400 mt-12' />
                </div>

                <button onClick={handleClickTop} className='absolute -translate-x-1/2 -translate-y-1/2 -bottom-10 left-1/2 bg-orange-600 text-white rounded-full p-4 transition-all duration-300 hover:-bottom-9'><FaChevronUp /></button>



            </section>

        </>
    )
}

export default Home