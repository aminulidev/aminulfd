import React from 'react';
import Link from "next/link";

const ContactItem = ({icon, username, url}) => {
    return (
        <div className="col-4 col-md-4">
            <div className="item">
                <div className="icon email">
                    {icon}
                </div>
                <p className="name d-none d-md-block">{username}</p>
                <div className="buttons">
                    <Link href={url} target="_blank">
                        <a className="btn" target="_blank">Send</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactItem