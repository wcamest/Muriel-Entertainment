import Link from 'next/link'
import React from 'react'

type Props = {}

const NavBarComponent = (props: Props) => {
  return (
    <div className='lg:fixed w-full px-6 py-4 top-0 left-0 flex justify-end gap-6 z-50 bg-muriel lg:bg-transparent'>
        <Link href={"/catalogo"}><span>Catálogo</span></Link>
        <Link href={"/informacion"}><span>Información</span></Link>
        <Link href={"/sobre_nosotros"}><span>Sobre nosotros</span></Link>
    </div>
  )
}

export default NavBarComponent