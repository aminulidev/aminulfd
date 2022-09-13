import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const PortfolioItem = ({ img, title, technology, github, live}) => {
    return (
        <div className="col">
            <div className="item">
                <div className="item_img">
                    <Image src={img} className="img-fluid" height={250} width={500}  alt={title} />
                </div>
                <h5>{title}</h5>
                <p>{technology}</p>
                <div className="buttons">
                    <Link href={github}>
                        <a className='btn btn_primary' target="_blank">Github</a>
                    </Link>
                    <Link href={live}>
                        <a className='btn' target="_blank">Live Demo</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem