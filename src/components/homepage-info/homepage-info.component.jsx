import './homepage-info.styles.scss';


const HomePageInfo = () => {


    return (
        <div className="home-container">
                
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
                    src={require('../../assets/pictures/nike_green.jpg')}
                    alt="green nike sneaker"
                    className="homepage-background-image"
                    loading="lazy"
                />

            </div>
    );
}

export default HomePageInfo;