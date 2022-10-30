
import { portfolioData } from './data';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
    return (
        <section id='portfolio' className='portfolio section_gap'>
            <div className="container portfolio_container">
                <div className="title">
                    <h5>My Recent Work</h5>
                    <h2>Portfolio</h2>
                </div>
                <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
                    {
                        portfolioData.map((data) => {
                            return <PortfolioItem key={data.id} img={data.img} title={data.title} technology={data.technology} github={data.github} live={data.live} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Portfolio