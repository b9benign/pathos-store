import Brands from '../../brands/brands.component';
import HomePageInfo from '../../homepage-info/homepage-info.component';
import TrendsCarousel from '../../trends-carousel/trends-carousel.component';

import './home.styles.scss';




const HomePage = () => {

    return (
        <div className="home-container">

            <Brands />
            <h1 className="homepage-title">Welcome to pathos &hearts;</h1>
            <TrendsCarousel />
            <HomePageInfo />

        </div>
    );
}

export default HomePage;