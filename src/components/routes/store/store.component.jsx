import ProductPreview from '../../product-preview/product-preview.component';
import ProductFilter from '../../product-filter/product-filter.component';

import { useContext, useState, useEffect } from 'react';
import { ListContext } from '../../../context/list-context';

import './store.styles.scss';




const StorePage = () => {

    const { filteredProducts } = useContext(ListContext);
    const [currentPage, setCurrentPage] = useState(1)
    const [pageProducts, setPageProducts] = useState(15);

    const lastPost = currentPage * pageProducts;
    const firstPost = lastPost - pageProducts;
    const [currentList, setCurrentList] = useState(filteredProducts.slice(firstPost, lastPost));
    const [pagesNum, setPagesNum] = useState([]);
    const [activePage, setActivePage] = useState(currentPage);

    const handlePaginate = (e) => {
        const { value } = e.target;
        setCurrentPage(value);
    }

    useEffect(() => {
        setActivePage(currentPage.toString())
        console.log(currentPage);
    }, [currentPage])

    useEffect(() => {
        const unsubscribe = () => {
            setCurrentList(() => {
                const temp = filteredProducts.slice(firstPost, lastPost);
                return temp;
            })
        }
        return unsubscribe();
    }, [ filteredProducts, firstPost, lastPost, pageProducts])

    useEffect(() => {
        const temp = [];
        for (let i = 1; i <= Math.ceil(filteredProducts.length / pageProducts); i++) {
            temp.push(i);
        }
        setPagesNum(temp);
        setCurrentPage(1);
    }, [filteredProducts, pageProducts])


    return (
        <>
            <div className="store-page-container">
                <div className="store-page-content-spacer">
                    <div className="sp-filters-spacer">
                        <ProductFilter />
                    </div>

                    <div className="store-products-container">
                        {currentList.map((item) => {
                            return <ProductPreview item={item} key={item.id} />
                        })}
                    </div>
                    { pagesNum.length > 1 &&
                        <div className="sp-pagination-container">
                            <span className="sp-results-info">
                                Showing results {firstPost} - {lastPost} of {filteredProducts.length}
                            </span>
                            <div className="sp-pagination-spacer">
                                {pagesNum.map(num => {
                                    return (
                                        <button
                                            className={`sp-pagination-button ${activePage === num.toString() && 'sp-active-pagination-button'}`}
                                            value={num}
                                            key={num}
                                            onClick={handlePaginate}
                                        >
                                            {num}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    }

                </div>
            </div>
        </>

    );
}


export default StorePage;