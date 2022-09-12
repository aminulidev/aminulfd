import React from 'react'

const AboutItem = ({ icon, title, description }) => {
    return (
        <div className="col">
            <div className="card_item">
                {icon}
                <h5>{title}</h5>
                <small>{description}</small>
            </div>
        </div>
    )
}

export default AboutItem