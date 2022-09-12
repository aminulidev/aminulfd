import React from 'react'

const Skill = ({ icon, iconClass, title }) => {
    return (
        <div className="col-6 col-md-4 col-lg-3">
            <div className="item">
                <span className={"icon " + iconClass}>
                    {icon}
                </span>
                <h5>{title}</h5>
            </div>
        </div>
    )
}

export default Skill