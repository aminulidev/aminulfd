import Link from "next/link"

// Icon
import {FaEnvelope, FaFacebookMessenger, FaWhatsapp} from 'react-icons/fa';


const Contact = () => {
  return (
    <section id='contact' className="contact section_gap">
        <div className="container contact_container">
            <div className="title">
                <h5>Feel Free to</h5>
                <h2>Contact</h2>
            </div>
            <div className="row g-4 g-lg-5">
                <div className="col-12 col-md-4">
                    <div className="item">
                        <div className="icon email">
                            <FaEnvelope />
                        </div>
                        <h6 className="title">Email</h6>
                        <p className="name">aminulds61@gmail.com</p>
                        <div className="buttons">
                            <Link href="mailto:aminulds61@gmail.com" target="_blank">
                                <a className="btn btn_primary" target="_blank">Send Message</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="item">
                        <div className="icon messanger">
                            <FaFacebookMessenger />
                        </div>
                        <h6 className="title">Messanger</h6>
                        <p className="name">m.me/aminulids</p>
                        <div className="buttons">
                            <Link href="https://m.me/aminulids" target="_blank">
                                <a className="btn btn_primary" target="_blank">Send Message</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="item">
                        <div className="icon whatsapp">
                            <FaWhatsapp />
                        </div>
                        <h6 className="title">WhatsApp</h6>
                        <p className="name">+8801743-724256</p>
                        <div className="buttons">
                            <Link href="mailto:aminulds61@gmail.com" target="_blank">
                                <a className="btn btn_primary" target="_blank">Send Message</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                    <div className="contact_form">
                        <input type="text" name="name" placeholder="Your Name" className="form-control name" />
                        <input type="email" name="email" placeholder="Your Email" className="form-control email" />
                        <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message" className="form-control message"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
