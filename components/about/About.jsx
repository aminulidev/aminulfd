/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import aboutImg from '../../public/assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import Link from "next/link"

const About = () => {
  return (
    <section id='about' >
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_img">
            <Image src={aboutImg} alt="About Image"/>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
               <FaAward className="about_icon"/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about_card">
               <FiUser className="about_icon"/>
              <h5>Client</h5>
              <small>50+ Worldwide</small>
            </article>

            <article className="about_card">
               <VscFolderLibrary className="about_icon"/>
              <h5>Projects</h5>
              <small>35+ Completed</small>
            </article>
          </div>

          <p>
            Frontend Developer with exceptional skills in Analysis, Design, and Development of high scalable multi-tiered Web Applications. Experience in developing responsive UI(User Interface) of web applications. Code will be W3C standard.
          </p>

          <Link href='#contact'><a className="btn btn_primary">Let's Talk</a></Link>
        </div>
      </div>
    </section>
  )
}

export default About
