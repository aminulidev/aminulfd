import Head from 'next/head';

import Header from './../components/header/Header';
import Nav from './../components/nav/Nav';
import About from './../components/about/About';
import Experience from './../components/experience/Experience';
import Services from './../components/services/Services';
import Portfolio from './../components/portfolio/Portfolio';
import Testimonial from './../components/testimonials/Testimonial';
import Contact from './../components/contact/Contact';
import Footer from './../components/footer/Footer';


export default function Home() {
  return (
    <>
		<Head>
			<title>Frontend Developer | HTML5 | CSS3 | Sass | Tailwind CSS | Bootstrap | Git | JavaScript | React | NextJS</title>
			<meta name="description" content="Frontend Developer with exceptional skills in Analysis, Design, and Development of high scalable multi-tiered Web Applications by using html, css, sass, bootstrap, tailwind, . Experience in developing responsive UI(User Interface) of web applications. Code will be W3C standard."/>
			<meta name="keywords" content="frontend developer, portfolio website, react, nextjs, html, css, tailwind, sass, bootstrap" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
		</Head>

		<Header/>
		<Nav/>
		<About/>
		<Experience/>
		<Services/>
		<Portfolio/>
		<Testimonial/>
		<Contact/>
		<Footer/>
    </>
  )
}
