import alumniImage from '../assets/alumni1.png?format=webp'

const About = () => {
  return (
    <>
      <div className="p-32 bg-orange-50">
        <div className='flex flex-row justify-between items-center'>
          <div className="w-full max-w-[900px] min-w-[500px]">
            <h2 className="mb-4 text-[3rem]">Tentang Web Alumni</h2>
            <p className="leading-[2.5rem]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident distinctio fugiat ea, molestiae pariatur nostrum, excepturi veniam temporibus sunt, aut iste enim est omnis quaerat quia. Optio aliquid corrupti corporis debitis, impedit quidem quod repudiandae labore quis! Dolores illo culpa veritatis quos ex cupiditate nesciunt? Ipsa earum recusandae iure eum.</p>
          </div>
          <div className='flex w-[600px]'>
            <img src={alumniImage} alt="alumni" />
          </div>
        </div>
      </div>

      <div className="bg-white p-32">
        <h2 className="mb-8">Kata Sambutan <span className="text-orange-500"> Ketua Jurusan </span> Periode 2024 - 2025</h2>
        <div className='flex w-full flex-row gap-12'>
          <div className='w-[400px] h-96 flex flex-shrink-0'>
            <img className='w-full h-auto' src="https://via.placeholder.com/600" alt="alumni" />
          </div>
          <div className=''>
            <p className='leading-[3rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, quia. Officiis, fuga fugit iure ullam tempora molestias error dolores, molestiae aliquid suscipit repellat laborum harum quos, magni consequuntur ad vero voluptates ducimus doloribus. Voluptates, odio corporis nihil aliquam iusto sed rerum eveniet distinctio architecto soluta dolorem amet nisi neque ipsa et. Culpa quis a veritatis in eaque, ipsa impedit facere nisi, quaerat sapiente dicta perspiciatis tempora. Eos, eum! Officia consequatur necessitatibus dolores at, blanditiis veritatis sunt nostrum reprehenderit ipsa aliquam quaerat sed quas itaque voluptatem repellat magni praesentium voluptate ea, modi officiis? Quae nam rem iure exercitationem autem, optio illum ullam tenetur cupiditate saepe maiores ducimus labore quam reiciendis deleniti! Distinctio dolorum repellendus nam voluptas cumque ab maiores error quisquam, cum unde possimus, quia at soluta! Fuga quaerat similique doloribus cupiditate quibusdam eveniet id ex modi voluptatum ratione earum, aperiam impedit facere placeat rem dolor magnam recusandae mollitia atque voluptas nulla ipsa nihil quisquam. Magnam dolore dolores error porro culpa dolor fuga, est necessitatibus esse, similique corporis tenetur. Quidem, ab corporis rerum soluta debitis magni illum, voluptates veniam explicabo laudantium eaque iusto labore, repellendus molestiae ipsa beatae quas ullam voluptate similique vero ducimus eum et incidunt recusandae? Laboriosam, voluptates fugiat.</p>
          </div>
        </div>
      </div>


    </>
  )
}

export default About