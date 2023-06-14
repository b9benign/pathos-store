import Brands from '../../brands/brands.component';
import './home.styles.scss';

const HomePage = () => {
    return (
        <>
            <Brands />
            <div className="home-container">
                <span className="homepage-title">Welcome to pathos &hearts;</span>


                <div className="homepage-content-container">
                    <div className="homepage-sections-container">

                        <section className="homepage-section">
                            <div className="homepage-section-title-wrapper">
                                <span className="homepage-section-title">24/7 Sales</span>
                            </div>
                            <span> Some info about sales/ offers </span>
                        </section>

                        
                        <section className="homepage-section">
                            <div className="homepage-section-title-wrapper">
                                <span className="homepage-section-title">Brands</span>  
                            </div>
                            <span> Some info about our affiliate brands </span>
                        </section>

                        
                        <section className="homepage-section">
                            <div className="homepage-section-title-wrapper">
                                <span className="homepage-section-title">Services</span>
                            </div>
                            <span> Some info about our services/ shipping </span>
                        </section>

                    </div>
                </div>

            
                <img 
                    src={require('../../../assets/pictures/nike_green.jpg')}
                    alt="green nike sneaker"
                    className="homepage-background-image"
                    loading="lazy"
                />

            </div>
        </>
    );
}

export default HomePage;