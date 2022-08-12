import {FaClock} from 'react-icons/fa';

export default function Experience() {
  return (
    <section id="experience" className="experience section_gap">
        <div className="container experience_container">
            <div className="title">
                <h5>Previous Company</h5>
                <h2>Experience</h2>
            </div>
            <div className="row g-4 g-lg-5 row-cols-12 row-cols-md-2 row-cols-lg-3">
                <div className="col">
                    <div className="item">
                        <h5 className="title">Company Name</h5>
                        <div className="details">
                            <h6 className="designation">Frontend Developer</h6>
                            <span className="duration"><FaClock className='icon'/> 20-22</span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="item">
                        <h5 className="title">Company Name</h5>
                        <div className="details">
                            <h6 className="designation">Frontend Developer</h6>
                            <span className="duration"><FaClock className='icon'/> 20-22</span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="item">
                        <h5 className="title">Company Name</h5>
                        <div className="details">
                            <h6 className="designation">Frontend Developer</h6>
                            <span className="duration"><FaClock className='icon'/> 20-22</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
