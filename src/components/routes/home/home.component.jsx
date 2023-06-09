import Brands from '../../brands/brands.component';
import './home.styles.scss';

const HomePage = () => {
    return (
        <>
            <Brands />
            <div className="home-container">
                <div className="home-content-wrapper">
                </div>
            </div>
        </>
    );
}

export default HomePage;