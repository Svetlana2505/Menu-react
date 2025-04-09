import './_vars.scss';
import './_reset.scss';
import './_base.scss';
import './_fonts.scss';
import './_wrapper.scss';
import { Header } from 'components/Header';
import { Content } from 'components/Content';

import data from '../../data.json';
import { Button } from 'components/Button';

export const App = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="container">
          <main>
            <Content data={data} />
            <Button />
          </main>
          <footer></footer>
        </div>
      </div>
    </>
  );
};
