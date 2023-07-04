import { useContext } from 'react';
import { LovedItemContext } from '../../../context/loved-context';
import { UserContext } from '../../../context/user-context';
import ProductPreview from '../../product-preview/product-preview.component';
import './loved.styles.scss';

const LovedPage = () => {

    const {lovedList} = useContext(LovedItemContext);
    const {currentUser} = useContext(UserContext);

    return (
        <div className="loved-page-container">
            <div className="loved-page-intro-banner">
                
            </div>
            <div className="loved-page-content-spacer">
                <div className="loved-page-items-container">
                { currentUser
                    ?   
                        (   lovedList.length > 0 
                            ?
                                lovedList.map((lovedItem) => {
                                    return <ProductPreview item={lovedItem} key={lovedItem.id}/>
                                })
                            :   
                                <div className="loved-page-notification-wrapper">
                                    <span>You have no liked items yet.</span>
                                </div>
                        )
                    : 
                        <div className="loved-page-notification-wrapper">
                            <span>Log in to see your liked items</span>
                        </div>
                }
                </div>
            </div>
        </div>
    );
}

export default LovedPage;