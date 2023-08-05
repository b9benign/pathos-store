import { useContext } from 'react';
import { ListContext } from '../../context/list-context';

import './category-filter.styles.scss';



const CategoryFilter = () => {

    const { toggleCompItem } = useContext(ListContext);

    const handleToggle = (e) => {
        const {value} = e.target;
        toggleCompItem(value);
    }

    return (
        <div className="acf-comp-container">
            <div className="acf-content-wrapper">

                <section className="acf-section">
                    <legend className="acf-section-title">Gender</legend>
                    <button className="acf-selection-button" value="women" onClick={handleToggle}>Women</button>
                    <button className="acf-selection-button" value="men" onClick={handleToggle}>Men</button>
                </section>
                <section className="acf-section">
                    <legend className="acf-section-title">Category</legend>
                    <button className="acf-selection-button" value="Running" onClick={handleToggle}>Running</button>
                    <button className="acf-selection-button" value="Lifestyle" onClick={handleToggle}>Lifestyle</button>
                    <button className="acf-selection-button" value="Outdoor" onClick={handleToggle}>Outdoor</button>
                    <button className="acf-selection-button" value="Skate" onClick={handleToggle}>Skate</button>
                    <button className="acf-selection-button" value="Court" onClick={handleToggle}>Court</button>
                </section>
                <section className="acf-section">
                    <legend className="acf-section-title">Brands</legend>
                    <button className="acf-selection-button" value="Nike" onClick={handleToggle}>Nike</button>
                    <button className="acf-selection-button" value="Adidas" onClick={handleToggle}>Adidas</button>
                    <button className="acf-selection-button" value="Jordan" onClick={handleToggle}>Jordan</button>
                    <button className="acf-selection-button" value="New Balance" onClick={handleToggle}>New Balance</button>
                    <button className="acf-selection-button" value="ON" onClick={handleToggle}>ON</button>
                    <button className="acf-selection-button" value="Vans" onClick={handleToggle}>Vans</button>
                </section>

                
            </div>
        </div>
    )
}

export default CategoryFilter;