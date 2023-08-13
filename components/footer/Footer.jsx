import Link from 'next/link';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

import Year from './Year';


export default function Footer() {

    return (
        <footer id="footer" className="footer">
            <div className="container footer_container">
                <div className="footer_copyright">
                    <span>© <Year />  <Link href="/"><a>AMINUL</a></Link> | All rights reserved.</span>
                </div>
                <div className="footer_socials">
                    <Link href="https://github.com/aminulds" >
                        <a className="icon github" target="_blank"><FaGithub /></a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/aminulds">
                        <a className="icon linkedin" target="_blank"><FaLinkedin /></a>
                    </Link>
                    {/* <Link href="https://twitter.com/aminulds" >
                        <a className="icon twitter" target="_blank"><FaTwitter /></a>
                    </Link> */}
                </div>
            </div>
        </footer>
    )
}
