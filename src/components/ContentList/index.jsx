import './style.scss';
import formatPrice from '../../utils/priceFormatter';

export const ContentList = ({ items }) => {
  return (
    <ul className="content-menu__list">
      {items.map(({ description, img, name, price, tags, oldPrice }) => (
        <li className="content-menu__item" key={name}>
          <div className="img">
            <img src={img.src} srcSet={img.srcSet} alt="" />
          </div>
          <div className="text">
            <div className="text-top">
              <p className="text-top__text">{name}</p>
              {/* <img /> */}

              <div className="text-top__price">
                {oldPrice && <span>$ {formatPrice(oldPrice)}</span>} $
                {formatPrice(price)}
              </div>
            </div>
            <div className="text-bottom">{description}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};
