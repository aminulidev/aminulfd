import Image from 'next/image';
import Link from 'next/link';

import portfolio1 from '../../public/assets/portfolio1.jpg';
import portfolio2 from '../../public/assets/portfolio2.jpg';
import portfolio3 from '../../public/assets/portfolio3.jpg';
import portfolio4 from '../../public/assets/portfolio4.jpg';
import portfolio5 from '../../public/assets/portfolio5.jpg';
import portfolio6 from '../../public/assets/portfolio6.jpg';

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio section_gap'>
        <div className="container portfolio_container">
            <div className="title">
                <h5>My Recent Work</h5>
                <h2>Portfolio</h2>
            </div>
            <div className="row g-4 g-md-5 row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div className="col">
                    <div className="item">
                        <div className="item_img">
                            <Image src={portfolio1} className="img-fluid" alt="Portfolio1" />
                        </div>
                        <h5>Portfolio Item Title</h5>
                        <div className="buttons">
                            <Link href='https://github.com/aminulds'>
                                <a className='btn btn_primary' target="_blank">Github</a>
                            </Link>
                            <Link href='#'>
                                <a className='btn' target="_blank">Live Demo</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="item">
                        <div className="item_img">
                            <Image src={portfolio2} className="img-fluid" alt="Portfolio1" />
                        </div>
                        <h5>Portfolio Item Title</h5>
                        <div className="buttons">
                            <Link href='https://github.com/aminulds'>
                                <a className='btn btn_primary' target="_blank">Github</a>
                            </Link>
                            <Link href='#'>
                                <a className='btn' target="_blank">Live Demo</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="item">
                        <div className="item_img">
                            <Image src={portfolio3} className="img-fluid" alt="Portfolio1" />
                        </div>
                        <h5>Portfolio Item Title</h5>
                        <div className="buttons">
                            <Link href='https://github.com/aminulds'>
                                <a className='btn btn_primary' target="_blank">Github</a>
                            </Link>
                            <Link href='#'>
                                <a className='btn' target="_blank">Live Demo</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="item">
                        <div className="item_img">
                            <Image src={portfolio4} className="img-fluid" alt="Portfolio1" />
                        </div>
                        <h5>Portfolio Item Title</h5>
                        <div className="buttons">
                            <Link href='https://github.com/aminulds'>
                                <a className='btn btn_primary' target="_blank">Github</a>
                            </Link>
                            <Link href='#'>
                                <a className='btn' target="_blank">Live Demo</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="item">
                        <div className="item_img">
                            <Image src={portfolio5} className="img-fluid" alt="Portfolio1" />
                        </div>
                        <h5>Portfolio Item Title</h5>
                        <div className="buttons">
                            <Link href='https://github.com/aminulds'>
                                <a className='btn btn_primary' target="_blank">Github</a>
                            </Link>
                            <Link href='#'>
                                <a className='btn' target="_blank">Live Demo</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="item">
                        <div className="item_img">
                            <Image src={portfolio6} className="img-fluid" alt="Portfolio1" />
                        </div>
                        <h5>Portfolio Item Title</h5>
                        <div className="buttons">
                            <Link href='https://github.com/aminulds'>
                                <a className='btn btn_primary' target="_blank">Github</a>
                            </Link>
                            <Link href='#'>
                                <a className='btn' target="_blank">Live Demo</a>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Portfolio