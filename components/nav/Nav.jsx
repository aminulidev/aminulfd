import Link from "next/link";
import {AiFillHome, AiFillProject} from 'react-icons/ai';
import {FaHeadSideVirus, FaBriefcase, FaSms} from 'react-icons/fa';

import {useState} from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <section className="nav-section">
        <div className="container">
            <nav>
                <Link href='#'>
                    <a onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiFillHome/></a>
                </Link>
                <Link href='#skills'>
                    <a onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active': ''}><FaHeadSideVirus/></a>
                </Link>
                <Link href='#experience'>
                    <a onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><FaBriefcase/></a>
                </Link>
                <Link href='#portfolio'>
                    <a onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active': ''}><AiFillProject/></a>
                </Link>
                <Link href='#contact'>
                    <a onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><FaSms/></a>
                </Link>
            </nav>
        </div>
    </section>
    
  )
}

export default Nav
