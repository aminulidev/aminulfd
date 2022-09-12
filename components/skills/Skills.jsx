import { FaHtml5, FaCss3Alt, FaJs, FaSass, FaBootstrap, FaGitAlt, FaReact } from 'react-icons/fa';
import {TbBrandNextjs} from 'react-icons/tb';

const Skills = () => {
  return (
    <section id='skills' className='skills section_gap'>
        <div className="container skills_container">
            <div className="title">
                <h5>What I Know</h5>
                <h2>Skills</h2>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8">
                    <div className="frontend">
                        <div className="row g-5 row-cols-2 row-cols-md-3">
                            <div className="col">
                                <div className="item">
                                    <span className="icon html5">
                                        <FaHtml5 />
                                    </span>
                                    <h5>HTML</h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="item">
                                    <span className="icon css3">
                                        <FaCss3Alt />
                                    </span>
                                    <h5>CSS</h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="item">
                                    <span className="icon js">
                                        <FaJs />
                                    </span>
                                    <h5>JavaScript</h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="item">
                                    <span className="icon sass">
                                        <FaSass />
                                    </span>
                                    <h5>SASS</h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="item">
                                    <span className="icon bootstrap">
                                        <FaBootstrap />
                                    </span>
                                    <h5>Bootstrap</h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="item">
                                    <span className="icon git">
                                        <FaGitAlt />
                                    </span>
                                    <h5>Git</h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="item">
                                    <span className="icon react">
                                        <FaReact />
                                    </span>
                                    <h5>React</h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="item">
                                    <span className="icon nextjs">
                                        <TbBrandNextjs />
                                    </span>
                                    <h5>NextJS</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
