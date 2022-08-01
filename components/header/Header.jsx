/* eslint-disable react/no-unescaped-entities */

import Link from 'next/link'
import Image from "next/image"
import CTA from "./CTA"
import me from '../../public/assets/me.png'
import HeaderSocials from './HeaderSocials'
import {BsChevronDoubleDown} from 'react-icons/bs'

const Header = () => {
  return (

    <header className='section-gap'>
        <div className='container header_container'>
            <div className='title'>
                <h5>Hello I'm</h5>
                <h1>Aminul Islam</h1>
                <h5 className='text_light'>Frontend Developer</h5>
            </div>
            <CTA/>
            <div className="row">
                <div className="col-md-3">
                    <HeaderSocials/>
                </div>
                <div className="col-md-6">
                    <div className="me">
                        <Image src={me} alt="my photo" />
                    </div>
                </div>
                <div className="col-md-3">
                    <Link href='#contact'>
                        <a className='scroll_down'><BsChevronDoubleDown/></a>
                    </Link>
                </div>

            </div>

            

            
        
        </div>
    </header>
  )
}

export default Header
