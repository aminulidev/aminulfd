import React from 'react';
import { FaClock, FaBriefcase } from 'react-icons/fa';

const ExperienceItem = ({ designation, company, duration }) => {
    return (
        <div className="col">
            <div className="item">
                <span className='icon'>
                    <FaBriefcase />
                </span>
                <h5 className="title">{designation}</h5>
                <div className="description">
                    <h6 className="designation">{company}</h6>
                    <span className="duration"><FaClock className='durationIcon' /> {duration}</span>
                </div>
            </div>
        </div>
    )
}

export default ExperienceItem