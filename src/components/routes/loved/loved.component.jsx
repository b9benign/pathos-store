import { useContext } from 'react';
import { LovedItemContext } from '../../../context/loved-context';
import './loved.styles.scss';

const LovedPage = () => {

    const {updateLovedList} = useContext(LovedItemContext);

    return (
        <div className="loved-page-container">
            <div className="loved-page-intro-banner">
                <button onClick={updateLovedList}>Very kool itemZ</button>
            </div>
        </div>
    );
}

export default LovedPage;