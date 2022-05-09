import React from 'react'
import Link from 'next/link'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <Link href='https://www.linkedin.com/in/aminulds'>
            <a ><BsLinkedin/></a>
        </Link>
        <Link href='https://github.com/aminulds'>
            <a ><BsGithub/></a>
        </Link>
        <Link href='https://twitter.com/aminulds'>
            <a ><BsTwitter/></a>
        </Link>
    </div>
  )
}

export default HeaderSocials