import Brands from '../../brands/brands.component';
import './home.styles.scss';

const HomePage = () => {
    return (
        <>
            <Brands />
            <div className="home-container">
                <span className="homepage-title">Welcome to pathos &hearts;</span>
                <div className="home-content-container">
                    
                    <div className="homepage-sections-container">
                        <section className="homepage-section">
                            <span className="homepage-section-title"></span>
                        </section>

                        
                        <section className="homepage-section">
                            <span className="homepage-section-title"></span>
                        </section>

                        
                        <section className="homepage-section">
                            <span className="homepage-section-title"></span>
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