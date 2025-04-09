import './style.scss';

import { ContentList } from 'components/ContentList';

export const Content = ({ data }) => {
  return (
    <>
      <nav className="nav">
        {data.map(el => (
          <a href={`#${el.id}`}>{el.title}</a>
        ))}
      </nav>
      <div className="content">
        {data.map(({ id, items, title }) => (
          <div className="content-menu" key={id} id={id}>
            <div className="content-menu__header">{title}</div>
            <ul className="content-menu__list">
              {items.map(item => (
                <ContentList item={item} key={item.name} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
