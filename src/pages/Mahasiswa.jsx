import { DataAngkatan } from "../DataMap/MahasiswaAlumni"
import { useNavigate } from "react-router-dom"

const Mahasiswa = () => {

  const Navigate = useNavigate();

  return (
    <>
      <section onContextMenu={(e) => e.preventDefault()} className="p-64 px-4 sm:px-24 2xl:px-96 bg-orange-100 pt-24  md:h-screen md:pt-32 md:p-32 md:px-12">
        <div className="">
          <div className="flex justify-center text-center mb-12">
          <h2>Angkatan</h2>
          </div>
          <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12">
            {DataAngkatan.map((angkatan, index) => (
              <button style={{ animationDelay: `${index * 0.5}s` }}  onClick={() => Navigate(`/mahasiswa/${angkatan.Angkatan}`)} className="FadeIn w-full max-w-[400px] min-w-[290px] bg-white shadow-md rounded-md p-8 border font-bold border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300" key={index}>{angkatan.Angkatan} 
              {(angkatan.NamaAngkatan) ? (` - ${angkatan.NamaAngkatan}`) : ('')}
              </button>
            ))}
          </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Mahasiswa