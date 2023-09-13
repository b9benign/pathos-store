import Brands from '../../brands/brands.component';
// import HomePageInfo from '../../homepage-info/homepage-info.component';
// import TrendsCarousel from '../../trends-carousel/trends-carousel.component';

import './home.styles.scss';




const HomePage = () => {

    return (
        <div className="home-container">

            <Brands />
            <span className="homepage-title">Our homepage is still under construction</span>

        </div>
    );
}

export default HomePage;