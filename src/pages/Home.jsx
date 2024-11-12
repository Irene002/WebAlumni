import React from 'react'

// IMAGES
import image1 from '../assets/image1.jpeg';

// LOGO
import logo1 from '../assets/logo-ti.png'
import logo2 from '../assets/Hima.gif'
import logo3 from '../assets/polnustar.png'

// DATA
import cardDataMahasiswa from '../components/cards/cardData/CardDataMahasiswa';


import {FaInstagram, FaArrowRight, FaFacebook} from 'react-icons/fa6'

// COMPONTENTS
import AnimationTitle from '../components/Animations/AnimationTitle'
import AnimationInView from '../components/Animations/AnimationInView';
import ButtonLink from '../components/Buttons/ButtonLink';
import ButtonScrollToTop from '../components/Buttons/ButtonScrollToTop';

import CardImage from '../components/cards/CardImage';

import CardProfilMahasiswa from '../components/cards/CardProfilMahasiswa';

const Home = () => {
    AnimationTitle('TitleHome', 1.3)

    AnimationInView('CardSambutanImage', 1)
    AnimationInView('ContentSambutan', 1.5)

    AnimationInView('CardPengantarImage', 1)
    AnimationInView('ContentPengantar', 1.5)

  return (
    <section>
        <div className='flex w-full h-[700px] relative'>
            <div className='absolute z-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' id='TitleHome'>
            <h2>Edisi 2025</h2>
            <h1>WEBSITE ALUMNI</h1>
            <h2>Politeknik Negeri Nusa Utara</h2>
            <p>Angkatan 2022 nih bos... angkatan lain mana bisa?</p>
            </div>
            <img className='w-full h-auto object-cover brightness-50' src={image1} />
        </div>

        <div className='px-32 py-24 SectionContents'>
            <div className='flex flex-row justify-between gap-12 SambutanContents'>
                
                <CardImage
                CardId={'CardSambutanImage'}
                CardImage={image1}
                CardName={'Oktavianus Lumasuge, S.Kom, M.Kom'}
                CardNameSpan={'- Ketua Jurusan Teknologi Informatika'}
                />
                
                <div className='Sambutan leading-loose' id='ContentSambutan'>
                    <h2>KATA SAMBUTAN</h2>
                    <hr className='border-black mb-4' />
                    <p className='leading-loose text-justify select-text cursor-auto'>Dengan penuh syukur kepada Tuhan Yang Maha Esa, kami persembahkan Buku Alumni Ediisi 2025 ini sebagai wujud penhargaan atas kerja keras dan dedikasi mahasiswa Program Studi D3 Sistem Informasi. Di tengah indahnya pesona alam Kepulauan Sangihe yang penuh dengan nilai - nilai luhur budaya lokal, kita melihat generasi muda yang penuh semangat membangun masa depan. Seperti laut yang tak pernah berhenti berombak, begitu pula semangat para mahasiswa kita yang terus berjuang dan bertahan dalam menempuh perjalanan akademik mereka</p>
                    <p className='leading-loose text-justify select-text cursor-auto'>Sebagai Ketua Jurusan Teknologi Informatika, saya merasa bangga dengan pencapaian para mahasiswa yang berhasil menyelesaikan Proyek Kerja Akhir. Setiap proyek yang dihasilkan bukan hanya cerminan dari kemampuan teknis dan intelektual mereka, tetapi juga membawa nilai - nilai lokal Sangihe, seperti kebersamaan, gotong royong, dan rasa cinta terhadap tanah kelahiran. Dengan memadukan teknologi modern dan kekayaan budaya, mereka telah menciptakan karya - karya yang memiliki dampak positif bagi masyarakat dan potensi lokal, sejalan dengan tantangan perkembangan zaman yang semakin dinamis.</p>
                    <p className='leading-loose text-justify select-text cursor-auto'>Akhir kata, saya ucapkan selamat kepada seluruh alumni yang telah sukses meraih gelar Ahli Madya. Semoga pencapaian ini menjadi awal dari langkah - langkah besar yang akan datang. Kami berharap ilmu yang telah diperoleh di bangku kuliah dapat digunakan untuk berkontribusi dalam pembangunan daerah Kepulauan Sangihe, sembari tetap menjaga kearifan lokal dan semangat membangun masa depan. Terima kasih kepada seluruh pihak yang telah perbperan dalam keberhasilan ini. Mari kita terus berkarya, dengan semangat laut yang tak pernah berhenti bergelora, untuk kemajuan bersama.</p>
                    <p className='select-text cursor-auto'>Salam hangat dan sukses selalu!</p>
                </div>
            </div>
            <div className='flex flex-row justify-between gap-8 mt-32 PengantarContents'>
                <div className='Pengantar leading-loose text-end' id='ContentPengantar'>
                    <h2>KATA PENGANTAR</h2>
                    <hr className='border-black mb-4' />
                    <p className='leading-loose text-justify select-text cursor-auto'>Puji syukur kita panjatkan ke hadirat Tuhan Yang Maha Esa, atas rahmat dan karunia-Nya sehingga mahasiswa Jurusan Teknologi Informatika, Program Studi D3 Sistem Informasi, berhasil menyelesaikan studi dan mencapai tahap akhir pendidikan yang ditandai dengan penyusunan Proyek Kerja Akhir, Buku Alumni Edisi 2025 ini menjadi saksi perjalanan panjang dan penuh dedikasi para mahasiswa dalam menuntut ilmu serta menjadi refleksi dari semangat dan ketekunan mereka dalam menghadapi tantangan di dunia akademik maupun praktis.</p>
                    <p className='leading-loose text-justify select-text cursor-auto'>Sebagai Ketua Panitia Proyek Kerja Akhir, saya merasa bangga dan bersyukur melihat hasil karya yang telah dicapai oleh para mahasiswa. Melalui berbagai tahapan proses, mulai dari perencanaan hingga implementasi, setiap proyek yang dihasilkan tidak hanya menunjukkan kemampuan akademik, tetapi juga kemampuan analitis, problem solving, dan kreativitas yang diharapkan dapat berguna bagi dunia industri an masyarakat. Website ini menjadi wadah untuk menghimpun berbagai hasil kerja keras tersebut dan juga menjadi kenangan - kenangan yang berharga bagi para alumni.</p>
                    <p className='leading-loose text-justify select-text cursor-auto'>Akhir kata, saya ucapkan selamat kepada seluruh mahasiswa yang telah menyelesaikan Proyek Kerja Akhir dan meraih gelar Ahli Madya, Semoga ilmu yang telah diperoleh selama menempuh pendidikan di Program Studi D3 Sistem Informasi dapat diaplikasikan di dunia kerja dan berkontribusi positif bagi perkembangan teknologi informasi di Indonesia. Terima kasih kepada semua pihak yang telah mendukung penyelenggaraan Proyek Kerja Akhir ini. Selamat berkarya dan semoga sukses di masa depan!</p>
                </div>
                <CardImage
                CardId={'CardPengantarImage'}
                CardImage={image1}
                CardName={'Christian Koloay, M.Kom'}
                CardNameSpan={'- Ketua Panitia'}
                />
            </div>

        {/* LIST MAHASISWA */}
        <div className='mt-32'>
            <h2 className='flex justify-center py-16 text-center'>MAHASISWA ALUMNI</h2>
        <div className='flex-wrap flex gap-4 justify-center'>
            {/* Cards */}
        {cardDataMahasiswa.slice (0, 3).map((card, index) => (
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
        <div className='flex justify-center mt-[7rem]'>
        <ButtonLink
        path={'/mahasiswa'}
        linkLabel={'Lihat Selengkapnya'}
        />
        </div>
        </div>

        <div className='mt-56 mb-32 flex flex-col items-center'>
            <hr className='border-zinc-500 mb-8 LineTop' />
            <div className='flex flex-row gap-24 justify-center ContentSpons'>
                <div className='flex flex-col items-center gap-4'>
                <img className='w-32 h-32' src={logo1} alt="Teknologi Informatika" />
                <h3 className='text-center'>Teknologi Informatika</h3>
                </div>
                <div className='flex flex-col items-center gap-4 w-64'>
                <img className='w-fit h-32' src={logo2} alt="Teknologi Informatika" />
                <h3 className='text-center'>HIMPUNAN MAHASISWA PROGRAM STUDI SISTEM INFORMASI</h3>
                </div>
                <div className='flex flex-col items-center gap-4 w-36'>
                <img className='w-32 h-32' src={logo3} alt="Teknologi Informatika" />
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