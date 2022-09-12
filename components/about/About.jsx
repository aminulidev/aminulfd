import Image from "next/image"
import aboutImg from '../../public/assets/me-about.jpg'
import AboutItem from "./AboutItem"
// data
import { aboutData } from "./data"

const About = () => {
  return (
    
    <section id='about' className="about section_gap" >
        <div className="container about_container">
            <div className="title">
                <h5>Aminul Islam</h5>
                
                <h2>Frontend Developer</h2>
            </div>
            <div className="row g-5">
            {/* <p className="about_desc">Frontend Developer with exceptional skills in Analysis, Design, and Development of high scalable multi-tiered Web Applications. Experience in developing responsive UI(User Interface) of web applications. Code will be W3C standard.</p> */}
                <div className="col-md-5 d-flex align-items-center justify-content-center">
                    <div className="about_me">
                    
                        <div className="about_img">
                            <Image src={aboutImg} alt="About Image"/>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-7 d-grid align-items-center">
                    <div className="about_content">
                        <div className="row g-4 row-cols-1 row-cols-md-2 justify-content-center about_cards">
                            {
                                aboutData.map((data) =>{
                                    return <AboutItem key={data.id} icon={data.icon} title={data.title} description={data.description} />
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
