import { FaGraduationCap, FaBuildingColumns, FaCircleInfo } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

const MobileNav = () => {

    const Navigate = useNavigate();

  return (
    <>
    <nav className="bg-orange-600 p-4 fixed z-20 bottom-0 w-full sm:visible md:hidden lg:hidden xl:hidden">
        <ul className="text-white flex flex-row justify-center gap-12 items-center h-full">
            <li onClick={() => Navigate('/')} className="flex flex-col items-center gap-2">
                <FaBuildingColumns size={20}/>
                <p className="text-xs text-light">Beranda</p>
            </li>
            <li onClick={() => Navigate('/mahasiswa')} className="flex flex-col items-center gap-2">
                <FaGraduationCap size={20}/>
                <p className="text-xs text-light">Mahasiswa</p>
            </li>
            <li onClick={() => Navigate('/tentang')} className="flex flex-col items-center gap-2">
                <FaCircleInfo size={20}/>
                <p className="text-xs text-light">Tentang</p>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default MobileNav