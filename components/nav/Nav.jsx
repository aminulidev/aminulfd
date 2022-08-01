import Link from "next/link";
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessage} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <section className="nav-section">
        <div className="container">
            <nav>
                <Link href='#'>
                    <a onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
                </Link>
                <Link href='#about'>
                    <a onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><AiOutlineUser/></a>
                </Link>
                <Link href='#experience'>
                    <a onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BiBook/></a>
                </Link>
                <Link href='#services'>
                    <a onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><RiServiceLine/></a>
                </Link>
                <Link href='#contact'>
                    <a onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><BiMessage/></a>
                </Link>
            </nav>
        </div>
    </section>
    
  )
}

export default Nav
