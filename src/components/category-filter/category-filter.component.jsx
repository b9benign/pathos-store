import { useContext } from 'react';
import { ListContext } from '../../context/list-context';

import './category-filter.styles.scss';



const CategoryFilter = () => {

    const { toggleCompItem, compValues } = useContext(ListContext);

    const handleToggle = (e) => {
        const {value} = e.target;
        toggleCompItem(value);
    }


    //classes are hard-coded rubbish but should suffice for now
    return (
        <div className="acf-comp-container">
            <div className="acf-content-wrapper">

                <section className="acf-section">
                    <legend className="acf-section-title">Gender</legend>
                    <button className={`acf-selection-button ${compValues.includes("women") && 'acf-active-button'}`} value="women" onClick={handleToggle}>Women</button>
                    <button className={`acf-selection-button ${compValues.includes("men") && 'acf-active-button'}`} value="men" onClick={handleToggle}>Men</button>
                </section>
                <section className="acf-section">
                    <legend className="acf-section-title">Category</legend>
                    <button className={`acf-selection-button ${compValues.includes("Running") && 'acf-active-button'}`} value="Running" onClick={handleToggle}>Running</button>
                    <button className={`acf-selection-button ${compValues.includes("Lifestyle") && 'acf-active-button'}`} value="Lifestyle" onClick={handleToggle}>Lifestyle</button>
                    <button className={`acf-selection-button ${compValues.includes("Outdoor") && 'acf-active-button'}`} value="Outdoor" onClick={handleToggle}>Outdoor</button>
                    <button className={`acf-selection-button ${compValues.includes("Skate") && 'acf-active-button'}`} value="Skate" onClick={handleToggle}>Skate</button>
                    <button className={`acf-selection-button ${compValues.includes("Court") && 'acf-active-button'}`} value="Court" onClick={handleToggle}>Court</button>
                </section>
                <section className="acf-section">
                    <legend className="acf-section-title">Brands</legend>
                    <button className={`acf-selection-button ${compValues.includes("Nike") && 'acf-active-button'}`} value="Nike" onClick={handleToggle}>Nike</button>
                    <button className={`acf-selection-button ${compValues.includes("Adidas") && 'acf-active-button'}`} value="Adidas" onClick={handleToggle}>Adidas</button>
                    <button className={`acf-selection-button ${compValues.includes("Jordan") && 'acf-active-button'}`} value="Jordan" onClick={handleToggle}>Jordan</button>
                    <button className={`acf-selection-button ${compValues.includes("New Balance") && 'acf-active-button'}`} value="New Balance" onClick={handleToggle}>New Balance</button>
                    <button className={`acf-selection-button ${compValues.includes("ON") && 'acf-active-button'}`} value="ON" onClick={handleToggle}>ON</button>
                    <button className={`acf-selection-button ${compValues.includes("Vans") && 'acf-active-button'}`} value="Vans" onClick={handleToggle}>Vans</button>
                </section>

                
            </div>
        </div>
    )
}

export default CategoryFilter;