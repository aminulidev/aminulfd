import React from 'react';
import { FaClock } from 'react-icons/fa';
import { MdWork, MdWorkOff } from 'react-icons/md';

const ExperienceItem = ({ designation, company, duration, isExpire }) => {
    return (
        <div className="col">
            <div className="item">
                <span className='icon'>
                    {isExpire === true ? <MdWorkOff /> : <MdWork />}
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