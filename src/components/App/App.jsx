import './_vars.scss';
import './_reset.scss';
import './_base.scss';
import './_fonts.scss';
import './_wrapper.scss';
import { Header } from 'components/Header';
import { Nav } from 'components/Nav';
import { Content } from 'components/Content';

import data from '../../data.json';

export const App = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="container">
          <main>
            <Nav />
            <Content data={data} />
          </main>
          <footer></footer>
        </div>
      </div>
    </>
  );
};
