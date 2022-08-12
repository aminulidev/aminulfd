import Link from 'next/link';
import {FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa';

import Year from './Year';


export default function Footer() {

  return (
    <footer id="footer" className="footer">
        <div className="container footer_container">
            <div className="footer_copyright">
                <span>© <Year />  <Link href="#"><a>AMINUL</a></Link> | All rights reserved.</span>
            </div>
            <div className="footer_socials">
                <Link href="#">
                    <a className="icon linkedin"><FaLinkedin /></a>
                </Link>
                <Link href="#" >
                    <a className="icon github"><FaGithub /></a>
                </Link>
                <Link href="#" >
                    <a className="icon twitter"><FaTwitter /></a>
                </Link>
            </div>
        </div>
    </footer>
  )
}
