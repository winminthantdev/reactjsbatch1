import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Gridone from './assets/components/Gridone.jsx';
import GridTwo from './assets/components/GridTwo.jsx';
import GridThree from './assets/components/GridThree.jsx';
import GridSix from './assets/components/GridSix.jsx';
import GridFour from './assets/components/GridFour.jsx';
import GridFive from './assets/components/GridFive.jsx';
import GridSeven from './assets/components/GridSeven.jsx';
import GridEight from './assets/components/GridEight.jsx';

import GridNine from './assets/components/GridNine.jsx';
import GridTen from './assets/components/GridTen.jsx';

const contacts = ["su su", "yu yu","nu nu","ni ni","ma ma"]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Gridone />
    <GridTwo status='hello' />
    <GridThree />
    <GridFour />
    <GridFive />
    <GridSix />
    <GridSeven />
    <GridEight />
    {/* <GridNine data={contacts} /> */}
    <GridTen data={contacts} />
  </StrictMode>
);
