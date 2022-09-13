import ContactItem from "./ContactItem"
// Data
import { contactData } from './data';
// Emailjs
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c9jzt0k', 'template_ojxbup1', form.current, 'user_YWTe0E3A0Dr0xYXIO0lFQ')

        e.target.reset()
    
    };


    return (
        <section id='contact' className="contact section_gap">
            <div className="container contact_container">
                <div className="title">
                    <h5>Feel Free to</h5>
                    <h2>Contact</h2>
                </div>
                <div className="row g-4 ">

                    {
                        contactData.map((data) => {
                            return <ContactItem key={data.id} icon={data.icon} username={data.username} url={data.url} />
                        })
                    }

                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <form className="contact_form" ref={form} onSubmit={sendEmail}>
                            <input type="text" name="name" placeholder="Your Name" className="form-control name" required />
                            <input type="email" name="email" placeholder="Your Email" className="form-control email" required />
                            <textarea name="message" id="" cols="30" rows="4" placeholder="Your Message" className="form-control message" required></textarea>
                            <div className="form_button">
                                <button type="submit" className="btn btn_primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
