/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'

const CTA = () => {
  return (
    <div className='cta'>
        <Link href='../assets/cv.pdf' download >
            <a className='btn'>Download CV</a>
        </Link>
        <Link href='#contact' >
            <a className='btn btn-primary'>Let's Talk</a>
        </Link>
    </div>
  )
}

export default CTA