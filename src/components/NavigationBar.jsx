import { Link } from "react-router-dom"
import logo from '../assets/logo-ti.png?format=webp'

const NavigationBar = () => {

    return (
        <>
            <nav className="bg-orange-500 text-white p-8 px-4 sm:px-4 md:px-8 lg:px-12 xl:px-24" onContextMenu={(e) => e.preventDefault()}>
                <ul className="flex justify-center items-center lg:justify-between xl:justify-between">
                    <Link className="flex flex-row gap-4 items-center" to={'/'}>
                        <div className="flex w-12 h-auto">
                            <img src={logo} alt="" />
                        </div>
                        <p className="text-xl">Teknologi Informatika</p>
                    </Link>
                    <li className="flex-row gap-8 hidden sm:hidden md:hidden lg:flex xl:flex">
                        <Link className="transition-all duration-500 hover:scale-110" to={'/mahasiswa'}>Mahasiswa</Link>
                        <Link className="transition-all duration-500 hover:scale-110" to={'/tentang'}>Tentang</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavigationBar