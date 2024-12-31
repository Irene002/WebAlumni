import { Link } from "react-router-dom"
import logo from '../assets/logo-ti.png'

const NavigationBar = () => {

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
                        <Link className="transition-all duration-500 hover:scale-110" to={'/mahasiswa'}>Mahasiswa</Link>
                        <Link className="transition-all duration-500 hover:scale-110" to={'/tentang'}>Tentang</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavigationBar