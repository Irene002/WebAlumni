import { Link } from "react-router-dom"
import logo from '../assets/logo-ti.png'

const NavigationBar = () => {
    const Links = [
        { link: '/mahasiswa', linkname: 'Mahasiswa'},
        { link: '/tentang', linkname: 'Tentang'}
    ]

    return (
        <>
            <nav className="bg-orange-500 text-white p-8 px-24" onContextMenu={(e) => e.preventDefault()}>
                <ul className="flex flex-row justify-between items-center">
                    <Link className="flex flex-row gap-4 items-center" to={'/'}>
                        <div className="flex w-12 h-auto">
                            <img src={logo} alt="" />
                        </div>
                        <p className="text-xl">East Penynsula</p>
                    </Link>
                    <li className="flex flex-row gap-8">
                        {Links.map ((value , index) => (
                            <Link key={index} className="transition-all duration-500 hover:scale-110" to={value.link}>{value.linkname}</Link>
                        ))}
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavigationBar