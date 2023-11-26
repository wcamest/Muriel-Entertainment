import Image from 'next/image'
import React from 'react'

type Props = {}

const SobreNosotros = (props: Props) => {
  return (
    <div
      style={{ backgroundColor: "#eafffd" }}
      className="relative p-5 lg:py-20 w-screen h-screen overflow-x-hidden lg:overflow-hidden flex justify-center items-center"
    >
      <div className="w-full max-w-6xl h-full flex flex-col gap-5 lg:gap-10">
        <h1 className="text-4xl text-teal-700 font-bold">Sobre Nosotros</h1>
        <div className="w-full h-full flex-col lg:flex-row flex gap-5">
            <div className='w-full lg:w-4/12'>
                <Image src={"/product-3-image.jpg"} alt='image' width={720} height={553} className='border-8 border-solid border-teal-600 rounded-md' />
            </div>
            <div className='w-full lg:w-8/12'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores animi eveniet iusto nesciunt perferendis recusandae corrupti omnis facere, dolor magnam eligendi cum expedita qui natus quidem consequatur labore vitae! At?
                Itaque fugiat inventore deleniti officia tempore eaque ipsam aliquid ex nemo? Cumque beatae quo dicta vel! Nostrum quia fuga repellendus dignissimos, incidunt velit quae accusantium recusandae eum, et doloribus ducimus!
                Impedit quos magni distinctio hic adipisci libero itaque labore fugit molestias quaerat veritatis nulla repellendus dignissimos, ea eligendi, nostrum asperiores ipsa beatae repudiandae illo fuga nobis ipsam? Iure, expedita dolor?
                Dicta, fugit atque veritatis ipsum maxime incidunt doloremque maiores consequuntur minus laboriosam, error rem enim nobis ex eaque voluptatem eius aut sunt recusandae in neque veniam magni minima. Tempore, voluptates.
                Expedita delectus ullam nostrum tenetur hic, earum laudantium saepe necessitatibus id a perspiciatis praesentium impedit cupiditate similique accusamus libero sit voluptatibus corrupti temporibus voluptate harum, aliquam recusandae? Modi, expedita dolores?
            </div>
        </div>
      </div>
    </div>
  )
}

export default SobreNosotros