import { ContentList } from 'components/ContentList';
import './style.scss';

export const Content = ({ data }) => {
  return (
    <div className="content">
      {data.map(({ id, items, title }) => (
        <div className="content-menu" key={id}>
          <div className="content-menu__header">{title}</div>
          <ContentList items={items} />
        </div>
      ))}
    </div>
  );
};
