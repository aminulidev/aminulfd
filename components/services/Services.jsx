import Image from "next/image";
import serviceImg from '../../public/assets/service.jpg';


const Services = () => {
  return (
    <section id='services' className="services section_gap">
        <div className="container service_container">
        <div className="title">
            <h5>What I Offer</h5>
            <h2>Services</h2>
        </div>
            <div className="row">
                <div className="col-12 col-lg-8">
                    <div className="item">
                        <h4>FrontEnd Development</h4>
                        <div className="service_des">
                            <div className="service_img">
                                <Image src={serviceImg} alt="Service Image" className="img-fluid" />
                            </div>
                            <ul>
                                <li>✔️ React Frontend</li>
                                <li>✔️ Website Design</li>
                                <li>✔️ Figma to React</li>
                                <li>✔️ HTML to React</li>
                                <li>✔️ Figma to HTML</li>
                                <li>✔️ PSD to HTML</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
