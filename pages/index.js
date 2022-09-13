import Head from 'next/head';

import Nav from './../components/nav/Nav';
import About from './../components/about/About';
import Skills from './../components/skills/Skills';
import Experience from '../components/experience/Experience';
import Portfolio from './../components/portfolio/Portfolio';
import Testimonial from './../components/testimonials/Testimonial';
import Contact from './../components/contact/Contact';
import Footer from './../components/footer/Footer';


export default function Home() {
	return (
		<>
			<Head>
				<title>Frontend Developer | HTML5 | CSS3 | Sass | Tailwind CSS | Bootstrap | Git | JavaScript | React | NextJS</title>
			</Head>

			<Nav />
			<About />
			<Skills />
			<Experience />
			<Portfolio />
			<Testimonial />
			<Contact />
			<Footer />
		</>
	)
}
