import './Portfolio.css';
import PortfolioCard from './portfolio-card/Portfolio-card';
import TipCalcImage from '../assets/TipCalc.png';
import MemoryImage from '../assets/Memory.png';
import GridImage from '../assets/grid.png';
import Fetch from './Fetch/Fetch';

const Portfolio = () => {
    // Array of objects containing data for each portfolio project
    const PortfolioData = [
        {
            id: 1,
            name: 'Tip-Calculator',
            img: TipCalcImage,
            info: "Tip-Calculator challenge from FrontendMentor, created with HTML5, CSS, and JavaScript ES6. It's a responsive page that calculates the bill per person, including the tip amount.",
            repo: 'https://github.com/AwE9800/tip-calculator-app-main',
            site: 'https://awe9800.github.io/tip-calculator-app-main/',
        },
        {
            id: 2,
            name: 'Memory-Game',
            img: MemoryImage,
            info: "Memory game is a school project that we've created using HTML5, CSS, and JavaScript ES6. The game involves finding the most pairs to win. The page is responsive, and you can play against each other or against the computer.",
            repo: 'https://github.com/AwE9800/Memory-Game-main',
            site: 'https://awe9800.github.io/Memory-Game-main/',
        },
        {
            id: 3,
            name: 'Grid-Work',
            img: GridImage,
            info: "Grid challenge from FrontendMentor, created with HTML5, CSS, and Grid. It's a page where I've practiced using Grid and made the page responsive.",
            repo: 'https://github.com/AwE9800/testimonials-grid-section-main',
            site: 'https://awe9800.github.io/testimonials-grid-section-main/',
        },
    ];
    return (
        <section className="portfolio-container">
            <div className="portfolio-text-container">
                <div className="Portfolio-text">
                    <h2>Portfolio</h2>
                    <p>
                        Welcome to my portfolio! Here, I showcase some of my GitHub projects that reflect my passion for coding and
                        technical versatility. Explore and discover my work below.
                    </p>
                </div>
            </div>
            {/* Mapping through the PortfolioData array to render PortfolioCard components */}
            <div className="portfolio-cards-container">
                {PortfolioData.map(item => (
                    <PortfolioCard key={item.id} name={item.name} img={item.img} info={item.info} repo={item.repo} site={item.site} />
                ))}
            </div>
            <Fetch />
        </section>
    );
};

export default Portfolio;
