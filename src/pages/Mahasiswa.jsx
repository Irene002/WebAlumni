import { DataAngkatan } from "../DataMap/MahasiswaAlumni"
import { useNavigate } from "react-router-dom"

const Mahasiswa = () => {

  const Navigate = useNavigate();

  return (
    <>
      <section className="p-32 px-96 bg-orange-100 h-screen">
        <div className="">
          <div className="flex justify-center text-center mb-12">
          <h2>Angkatan</h2>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {DataAngkatan.map((angkatan, index) => (
              <button style={{ animationDelay: `${index * 0.5}s` }}  onClick={() => Navigate(`/mahasiswa/${angkatan.Angkatan}`)} className="FadeIn bg-white shadow-md rounded-md p-8 border font-bold border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300" key={index}>{angkatan.Angkatan}</button>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default Mahasiswa