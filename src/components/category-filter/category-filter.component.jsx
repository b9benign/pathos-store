import './category-filter.styles.scss';

const CategoryFilter = () => {

    return (
        <div className="acf-comp-container">
            <div className="acf-content-wrapper">

                <section className="acf-section">
                    <legend className="acf-section-title">Category</legend>
                    <button className="acf-selection-button">Women</button>
                    <button className="acf-selection-button">Men</button>
                </section>

                <section className="acf-section">
                    <legend className="acf-section-title">Brands</legend>
                    <button className="acf-selection-button">Nike</button>
                    <button className="acf-selection-button">Adidas</button>
                    <button className="acf-selection-button">Jordan</button>
                    <button className="acf-selection-button">New Balance</button>
                    <button className="acf-selection-button">ON</button>
                    <button className="acf-selection-button">Vans</button>
                </section>

            </div>
        </div>
    )
}

export default CategoryFilter;