import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import TechIcon from './TechIcon';

const PortfolioItem = ({ img, title, technology, github, live }) => {
    return (
        <div className="col">
            <div className="card item">
                <Image src={img} className="card-img-top" height={250} width={500} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p>
                        <span className='me-1'>Used:</span>
                        {technology.map((tech) => {
                            return <TechIcon key={tech.id} icon={tech.icon} />
                        })}
                    </p>
                    <div className="buttons">
                        {<Link href={github}>
                            <a className={`btn btn_primary ${github === '#' ? 'disable' : ''}`} target="_blank">Github</a>
                        </Link>}
                        <Link href={live}>
                            <a className={`btn ${live === '#' ? 'disable' : ''}`} target="_blank">Live Demo</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem