import '../styles/ProductCard.css';

const formatPrice = (number) => `${number.toLocaleString()}원`;

export default function ProductCard(props) {
  const {
    imageSrc,
    imageAlt,
    brand,
    title,
    discount,
    price,
    description,
    labelList,
  } = props;

  const discountPrice = price * (1 - discount * 0.01);
  return (
    <div className="productCard">
      <img src={imageSrc} alt={imageAlt} className="thumbnail" />
      {brand && <span className="brand">{brand}</span>}
      <span className="title">{title}</span>
      <p className="price">
        {discount && <span className="discountPercent">{discount}%</span>}
        <span className="discountPrice">
          {discount ? formatPrice(discountPrice) : formatPrice(price)}
        </span>
      </p>
      {discount && <span className="regularPrice">{formatPrice(price)}</span>}
      {description && <span className="description">{description}</span>}
      <p className="labelList">
        {labelList &&
          labelList.map((labelName, index) => (
            <span
              key={index}
              className={`label${labelName === 'Karly only' ? ' only' : ''}`}>
              {labelName}
            </span>
          ))}
      </p>
      <img src="src/assets/cart.png" alt="장바구니 열기" className="cart" />
    </div>
  );
}
