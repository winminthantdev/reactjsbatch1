import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import DivOne from './components/DivOne.jsx';

import DivTwo from './components/DivTwo.jsx';

import getimg from './assets/react.svg';

import DivThree from './components/DivThree.jsx';

import DivFour from './components/DivFour.jsx';

import DivFive from './components/DivFive.jsx';

import DivSix from './components/DivSix.jsx';

import DivSeven from './components/DivSeven.jsx';

import DivEight from './components/DivEight.jsx';

import DivNine from './components/DivNine.jsx';

import DivTen from './components/DivTen.jsx';

import DivEleven from './components/DivEleven.jsx';

import DivTwelve from './components/DivTwelve.jsx';

import DivThirteen from './components/DivThirteen.jsx';
import DivFourteen from './components/DivFourteen.jsx';
import DivFitten from './components/DviFitten.jsx';
import DivSisten from './components/DivSisten.jsx';
import DivSeventeen from './components/DivSeventeen.jsx';
import DivEighteen from './components/DivEighteen.jsx';

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <div>
    {/* <App /> */}
    <DivOne name='Aung Aung' age='30' />
    <DivOne name='Su Su' />
    <DivTwo name='Kyaw Kyaw' age='40' />
    <DivTwo name='Hla Hla' />
    <DivTwo />
    <img src={getimg} />
    <DivThree icon={getimg} />
    <DivFour icon={getimg} />
    <DivFive />
    <DivSix />
    <DivSeven />
    <DivEight />
    <DivNine />
    <DivTen />
    <DivEleven />
    <DivTwelve />
    <DivThirteen />
    <br />
    <hr />
    <DivFourteen />
    <br />
    <hr />
    <DivFitten />
    {/* <DivSisten /> */}
    {/* <DivSeventeen /> */}
    <DivEighteen />
  </div>

  // </StrictMode>,
);
