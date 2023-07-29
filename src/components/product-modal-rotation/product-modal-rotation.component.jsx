import './product-modal-rotation.styles.scss';


const ProductModalRotation = ({ item, imageToggler }) => {

    const { brand, gender } = item;
    const { activeImage, setActiveImage } = imageToggler;

    const handleImageActivation = (newImage) => {
        if (newImage !== activeImage) {
            setActiveImage(newImage);
        }
    }

    return (
        <div className="product-modal-image-rotation">
            <button className="product-modal-selection-button" onClick={() => handleImageActivation('thumbnail')}>
                <img
                    src={require(`../../assets/product-images/${gender}s/${brand.toLowerCase()}/thumbnail.webp`)}
                    className="product-modal-selectable-image"
                    alt="product thumbnail"
                    loading='lazy'

                />
            </button>
            <button className="product-modal-selection-button" onClick={() => handleImageActivation('profile')}>
                <img
                    src={require(`../../assets/product-images/${gender}s/${brand.toLowerCase()}/profile.webp`)}
                    className="product-modal-selectable-image"
                    alt="product profile"
                    value="profile"
                    loading='lazy'

                />
            </button>
            <button className="product-modal-selection-button" onClick={() => handleImageActivation('top')}>
                <img
                    src={require(`../../assets/product-images/${gender}s/${brand.toLowerCase()}/top.webp`)}
                    className="product-modal-selectable-image"
                    alt="product top"
                    loading='lazy'

                />
            </button>
            <button className="product-modal-selection-button" onClick={() => handleImageActivation('back')}>
                <img
                    src={require(`../../assets/product-images/${gender}s/${brand.toLowerCase()}/back.webp`)}
                    className="product-modal-selectable-image"
                    alt="product back"
                    loading='lazy'

                />
            </button>
        </div>
    )
}

export default ProductModalRotation;