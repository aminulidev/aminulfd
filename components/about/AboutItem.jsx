import Link from 'next/link'
import React from 'react'

const AboutItem = ({ hashLink, icon, title, description }) => {
    return (
        <div className="col">
            <Link href={hashLink} >
                <a className="card_item">
                    {icon}
                    <h5>{title}</h5>
                    <small>{description}</small>
                </a>
            </Link>
        </div>
    )
}

export default AboutItem