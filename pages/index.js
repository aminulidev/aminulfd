import Nav from './../components/nav/Nav';
import About from './../components/about/About';
import Skills from './../components/skills/Skills';
import Experience from '../components/experience/Experience';
import Portfolio from './../components/portfolio/Portfolio';
import Testimonial from './../components/testimonials/Testimonial';
import Contact from './../components/contact/Contact';
import Footer from './../components/footer/Footer';
import Head from 'next/head';


export default function Home() {
	return (
		<>
			<Head>
				<title>Frontend Dev | React | NextJS | Sass |Tailwind CSS | Bootstrap | Git | JavaScript | HTML5 | CSS3 | </title>
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
