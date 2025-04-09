import './style.scss';
import formatPrice from '../../utils/priceFormatter';

export const ContentList = ({
  item: { name, img, oldPrice, description, price, tags, label },
}) => {
  const classNames = tags => {
    let names = 'content-menu__item';

    if (tags) {
      names += tags.includes('vegan') ? ' item--vegan' : '';
      names += tags.includes('special') ? ' item--special' : '';
    }

    return names;
  };

  return (
    <li className={classNames(tags)} data-label={label}>
      <div className="img">
        <img src={img.src} srcSet={img.srcset} alt={name} />
      </div>
      <div className="text">
        <div className="text-top">
          <div className="text-top__text">{name}</div>

          <div className="text-top__price">
            {oldPrice && <span> {formatPrice(oldPrice)}</span>}
            {formatPrice(price)}
          </div>
        </div>
        <div className="text-bottom">{description}</div>
      </div>
    </li>
  );
};
