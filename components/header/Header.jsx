/* eslint-disable react/no-unescaped-entities */

import Link from 'next/link'
import Image from "next/image"
import CTA from "./CTA"
import me from '../../public/assets/me.png'
import HeaderSocials from './HeaderSocials'
import {BsChevronDoubleDown} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Aminul Islam</h1>
        <h5 className='text_light'>Frontend Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <Image src={me} alt="my photo" />
        </div>

        <Link href='#contact'>
          <a className='scroll_down'><BsChevronDoubleDown/></a>
        </Link>
      
      </div>
    </header>
  )
}

export default Header
