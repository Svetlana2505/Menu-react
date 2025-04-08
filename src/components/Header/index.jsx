import './style.scss';

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-logo">nique.</div>
          <div className="header-text">
            <p className="header-text__text">The pure taste of</p>
            <h1 className="header-text__title">Thailand</h1>
            <p className="header-text__subText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="header-menu">
            <ul>
              <li>Menu</li>
              <li>Restaurant</li>
              <li>Classes</li>
            </ul>
            <button>Book a Table</button>
          </div>
        </div>
      </div>
    </div>
  );
};
